package wirvsvirus.hack.stimmungsbarometer.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;

import javax.validation.Valid;

@RestController
public class RegistrationController {

    private MongoTemplate mongoTemplate;

    public RegistrationController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid PersonResource personResource) {
        mongoTemplate.insert(personResource);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
