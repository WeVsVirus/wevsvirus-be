package wirvsvirus.hack.stimmungsbarometer.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.model.HeatMapResult;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.model.Response;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.OptionalDouble;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.lookup;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.match;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;
import static org.springframework.data.mongodb.core.query.Criteria.where;

@RestController
public class HeatMapController {

    private MongoTemplate mongoTemplate;

    public HeatMapController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping("/heat")
    public ResponseEntity<?> heat(String responseDate) {
        Aggregation agg = newAggregation(
                match(where("responseDate").is(responseDate)),
                lookup("personResource", "userId", "_id", "users"),
                project("moodResponses", "users"));

        AggregationResults<HeatMapResult> results = mongoTemplate.aggregate(agg, "questionnaireResponseResource", HeatMapResult.class);

        Map<String, Map<String, ResultAggregation>> questions = new HashMap<>();
        for (HeatMapResult result : results) {
            Optional<PersonResource> user = result.getUsers().stream().findFirst();
            if (user.isPresent()) {
                for (Response<Integer> moodResponse : result.getMoodResponses()) {
                    Map<String, ResultAggregation> plzs = questions.computeIfAbsent(moodResponse.getQuestionId(), map -> new HashMap<String, ResultAggregation>());
                    ResultAggregation resultAggregation = plzs.computeIfAbsent(createPlzKey(user.get()), v -> new ResultAggregation());
                    resultAggregation.add(moodResponse.getResponse());
                    plzs.put(createPlzKey(user.get()), resultAggregation);
                }
            }
        }

        Map<String, List> response = new HashMap<>();
        for (Map.Entry<String, Map<String, ResultAggregation>> questionEntry : questions.entrySet()) {
            List plzs = new ArrayList();
            for (Map.Entry<String, ResultAggregation> aggregationEntry : questionEntry.getValue().entrySet()) {
                List plz = new ArrayList();
                plz.add(aggregationEntry.getKey());
                plz.add(aggregationEntry.getValue().avg());
                plzs.add(plz);
            }

            response.put(questionEntry.getKey(), plzs);
        }

        return ResponseEntity.ok(response);
    }

    private String createPlzKey(PersonResource personResource) {
        return personResource.getPlz().substring(0, 2);
    }

    private class ResultAggregation {
        private List<Integer> values = new ArrayList<>();

        private ResultAggregation() {

        }

        public void add(Integer response) {
            values.add(response);
        }

        public OptionalDouble avg() {
            return values.stream().mapToInt(value -> value).average();
        }

        @Override
        public String toString() {
            return String.format("(%s, %s)", values.stream().reduce(0, Integer::sum), values.size());
        }
    }
}
