package wirvsvirus.hack.stimmungsbarometer.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.model.QuestionnaireResponseResource;
import wirvsvirus.hack.stimmungsbarometer.model.Response;
import wirvsvirus.hack.stimmungsbarometer.model.SimpleTime;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@RestController
public class RegistrationController {

    private MongoTemplate mongoTemplate;

    public RegistrationController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody PersonResource personResource) {
        mongoTemplate.insert(personResource);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/mood")
    public ResponseEntity<?> mood(String id) {
        List<QuestionnaireResponseResource> result = mongoTemplate.find(query(where("userId").is(id)), QuestionnaireResponseResource.class);

        Map<String, List> response = new HashMap<>();
        for (QuestionnaireResponseResource r : result) {
            for (Response<Integer> integerResponse : r.getMoodResponses()) {
                List inner = response.computeIfAbsent(integerResponse.getQuestionId(), map -> new ArrayList());
                List inn = new ArrayList();
                inn.add(r.getResponseDate());
                inn.add(integerResponse.getResponse());
                inner.add(inn);
            }
        }

        return ResponseEntity.ok(response);
    }

    @GetMapping("/health")
    public ResponseEntity<?> health(String id) {
        List<QuestionnaireResponseResource> result = mongoTemplate.find(query(where("userId").is(id)), QuestionnaireResponseResource.class);

        Map<String, Map> response = new HashMap<>();
        for (QuestionnaireResponseResource r : result) {
            for (Response<SimpleTime> integerResponse : r.getHealthResponses()) {
                Map innerMap = response.computeIfAbsent(integerResponse.getQuestionId(), map -> new HashMap());
                innerMap.put(r.getResponseDate(), integerResponse.getResponse());
            }
        }

        return ResponseEntity.ok(response);
    }
}
