package wirvsvirus.hack.stimmungsbarometer.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.service.RegistrationService;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Component
@RequiredArgsConstructor
public class RegistrationServiceImpl implements RegistrationService {

    private final MongoTemplate mongoTemplate;

    @Override
    public void register(PersonResource personResource) {
        mongoTemplate.insert(personResource);
    }

    @Override
    public PersonResource getRegisteredUser(String userId, String plz) {
        return mongoTemplate.findOne(
                query(where("_id").is(userId).and("plz").is(plz)),
                PersonResource.class);
    }
}
