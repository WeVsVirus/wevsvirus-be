package wirvsvirus.hack.stimmungsbarometer.service;


import wirvsvirus.hack.stimmungsbarometer.model.PersonResource;

public interface RegistrationService {

    void register(PersonResource personResource);

    PersonResource getRegisteredUser(String userId, String plz);

}
