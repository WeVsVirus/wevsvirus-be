package com.example.demo;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    private MongoTemplate mongoTemplate;

    public HelloWorldController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @PostMapping("/register")
    public ResponseEntity<?> hello(@RequestBody PersonResource personResource) {
        mongoTemplate.insert(personResource);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
