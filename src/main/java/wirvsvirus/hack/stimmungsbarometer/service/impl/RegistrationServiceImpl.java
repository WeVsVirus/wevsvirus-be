package wirvsvirus.hack.stimmungsbarometer.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.service.RegistrationService;

@Component
@RequiredArgsConstructor
public class RegistrationServiceImpl implements RegistrationService {

    private final MongoTemplate mongoTemplate;

    @Override
    public void register(PersonResource personResource) {
        mongoTemplate.insert(personResource);
    }
}
