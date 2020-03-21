package com.example.demo;

import com.example.demo.model.QuestionnaireResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionsController {


    @PostMapping("/questionnaire")
    public String postQuestionnaireRepsonses(QuestionnaireResponse response) {
        return "Hello";
    }

}
