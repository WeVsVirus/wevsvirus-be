package wirvsvirus.hack.stimmungsbarometer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.controller.mapper.PersonMapper;
import wirvsvirus.hack.stimmungsbarometer.controller.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.service.RegistrationService;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;
    private final PersonMapper personMapper;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid PersonResource personResource) {
        registrationService.register(personMapper.fromControllerModelToServiceModel(personResource));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

}
