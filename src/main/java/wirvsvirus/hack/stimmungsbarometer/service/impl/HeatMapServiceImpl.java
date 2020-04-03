package wirvsvirus.hack.stimmungsbarometer.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.stereotype.Component;
import wirvsvirus.hack.stimmungsbarometer.controller.model.HeatMapResultResource;
import wirvsvirus.hack.stimmungsbarometer.controller.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.controller.model.Response;
import wirvsvirus.hack.stimmungsbarometer.service.HeatMapService;

import java.util.*;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.query.Criteria.where;

@RequiredArgsConstructor
@Component
public class HeatMapServiceImpl implements HeatMapService {

    private final MongoTemplate mongoTemplate;

    @Override
    public Map<String, List> heatMap(String date) {
        Aggregation agg = newAggregation(
                match(where("responseDate").is(date)),
                lookup("personResource", "userId", "_id", "users"),
                project("moodResponses", "users"));

        AggregationResults<HeatMapResultResource> results = mongoTemplate.aggregate(agg, "questionnaireResponseResource", HeatMapResultResource.class);

        Map<String, Map<String, HeatMapServiceImpl.ResultAggregation>> questions = new HashMap<>();
        for (HeatMapResultResource result : results) {
            Optional<PersonResource> user = result.getUsers().stream().findFirst();
            if (user.isPresent()) {
                for (Response<Integer> moodResponse : result.getMoodResponses()) {
                    Map<String, HeatMapServiceImpl.ResultAggregation> plzs = questions.computeIfAbsent(moodResponse.getQuestionId(), map -> new HashMap<String, HeatMapServiceImpl.ResultAggregation>());
                    HeatMapServiceImpl.ResultAggregation resultAggregation = plzs.computeIfAbsent(createPlzKey(user.get()), v -> new HeatMapServiceImpl.ResultAggregation());
                    resultAggregation.add(moodResponse.getResponse());
                    plzs.put(createPlzKey(user.get()), resultAggregation);
                }
            }
        }

        Map<String, List> response = new HashMap<>();
        for (Map.Entry<String, Map<String, HeatMapServiceImpl.ResultAggregation>> questionEntry : questions.entrySet()) {
            List plzs = new ArrayList();
            for (Map.Entry<String, HeatMapServiceImpl.ResultAggregation> aggregationEntry : questionEntry.getValue().entrySet()) {
                List plz = new ArrayList();
                plz.add(aggregationEntry.getKey());
                plz.add(aggregationEntry.getValue().avg());
                plzs.add(plz);
            }

            response.put(questionEntry.getKey(), plzs);
        }

        return response;
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
