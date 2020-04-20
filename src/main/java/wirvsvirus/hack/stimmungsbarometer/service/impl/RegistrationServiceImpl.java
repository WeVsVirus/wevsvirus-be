package wirvsvirus.hack.stimmungsbarometer.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.service.RegistrationService;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Component
@RequiredArgsConstructor
@Slf4j
public class RegistrationServiceImpl implements RegistrationService {

    private final MongoTemplate mongoTemplate;

    @Override
    public void register(PersonResource personResource) {
        log.debug("Registration started with ID:'{}'", personResource.getId());
        mongoTemplate.insert(personResource);
    }

    @Override
    public PersonResource getRegisteredUser(String userId, String plz) {
        return mongoTemplate.findOne(
                query(where("_id").is(userId).and("plz").is(plz)),
                PersonResource.class);
    }
}
