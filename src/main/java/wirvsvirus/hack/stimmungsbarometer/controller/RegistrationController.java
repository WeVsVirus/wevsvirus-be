package wirvsvirus.hack.stimmungsbarometer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import wirvsvirus.hack.stimmungsbarometer.common.mapper.PersonMapper;
import wirvsvirus.hack.stimmungsbarometer.controller.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.service.RegistrationService;

import javax.validation.Valid;
import java.util.Objects;

@RestController
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;
    private final PersonMapper personMapper;


    /***
     * @deprecated register is not an entity, therefore it is not restful. Use "/registration" instead (@see #registration)
     */
    @PostMapping("/register")
    @Deprecated
    public ResponseEntity<Void> register(@RequestBody @Valid PersonResource personResource) {
        return registration(personResource);
    }

    @PostMapping("/registrations")
    public ResponseEntity<Void> registration(@RequestBody @Valid PersonResource personResource) {
        registrationService.register(personMapper.fromControllerModelToServiceModel(personResource));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/registrations/{userId}")
    public ResponseEntity<PersonResource> userData(@PathVariable String userId, @RequestParam String zip) {
        PersonResource person = personMapper.fromServiceModelToControllerModel(
                registrationService.getRegisteredUser(userId, zip));
        if (Objects.isNull(person)) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(person);
        }
    }
}
