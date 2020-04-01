package wirvsvirus.hack.stimmungsbarometer.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.model.QuestionnaireResponseResource;

import javax.validation.Valid;

@RestController
public class QuestionsController {

    private MongoTemplate mongoTemplate;

    public QuestionsController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @PostMapping(value = "/questionnaire", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> postQuestionnaireResponses(@Valid @RequestBody QuestionnaireResponseResource response) {
        mongoTemplate.save(response);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
