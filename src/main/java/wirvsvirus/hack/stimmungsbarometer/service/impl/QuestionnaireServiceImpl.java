package wirvsvirus.hack.stimmungsbarometer.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import wirvsvirus.hack.stimmungsbarometer.common.exceptions.UserNotFoundException;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.model.QuestionnaireResponseResource;
import wirvsvirus.hack.stimmungsbarometer.service.QuestionnaireService;

import java.util.Objects;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Component
@RequiredArgsConstructor
public class QuestionnaireServiceImpl implements QuestionnaireService {

    private final MongoTemplate mongoTemplate;

    @Override
    public void storeAnswers(QuestionnaireResponseResource questionnaireAnswers) {
        PersonResource person = mongoTemplate.findOne(query(where("id").is(questionnaireAnswers.getUserId())), PersonResource.class);
        if (Objects.nonNull(person)) {
            mongoTemplate.save(questionnaireAnswers);
        } else {
            throw new UserNotFoundException(questionnaireAnswers.getUserId());
        }
    }
}
