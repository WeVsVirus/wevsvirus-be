package wirvsvirus.hack.stimmungsbarometer.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.model.QuestionnaireResponseResource;

@RestController
public class QuestionsController {

    private MongoTemplate mongoTemplate;

    public QuestionsController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @PostMapping(value = "/questionnaire", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void postQuestionnaireRepsonses(@RequestBody QuestionnaireResponseResource response) {
        mongoTemplate.save(response);
    }

}
