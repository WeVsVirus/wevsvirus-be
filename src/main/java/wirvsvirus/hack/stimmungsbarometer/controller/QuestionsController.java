package wirvsvirus.hack.stimmungsbarometer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.common.mapper.QuestionnaireMapper;
import wirvsvirus.hack.stimmungsbarometer.controller.model.QuestionnaireResponseResource;
import wirvsvirus.hack.stimmungsbarometer.service.QuestionnaireService;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class QuestionsController {

    private final QuestionnaireService questionnaireService;
    private final QuestionnaireMapper questionnaireMapper;

    @PostMapping(value = "/questionnaire", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> postQuestionnaireResponses(@Valid @RequestBody QuestionnaireResponseResource response) {
        questionnaireService.storeAnswers(questionnaireMapper.fromControllerModelToServiceModel(response));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
