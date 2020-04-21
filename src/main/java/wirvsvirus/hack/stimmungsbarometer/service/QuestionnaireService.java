package wirvsvirus.hack.stimmungsbarometer.service;

import wirvsvirus.hack.stimmungsbarometer.model.QuestionnaireResponseResource;

public interface QuestionnaireService {

    void storeAnswers(QuestionnaireResponseResource questionnaireAnswers);

}
