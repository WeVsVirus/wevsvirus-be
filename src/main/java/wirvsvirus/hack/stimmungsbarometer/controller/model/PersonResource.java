package wirvsvirus.hack.stimmungsbarometer.controller.model;

import lombok.Value;
import org.springframework.data.annotation.Id;
import wirvsvirus.hack.stimmungsbarometer.config.ValidationPatterns;

import javax.validation.constraints.*;

@Value
public class PersonResource {

    @Id
    @NotBlank
    private final String id;

    @NotNull
    private final Gender gender;
    private final Integer yearOfBirth;

    @Pattern(regexp = ValidationPatterns.ZIP3, message = "has to consist of three digits")
    private final String plz;

    @PositiveOrZero
    @Max(10)
    private final Integer householdSize;
    private final Boolean pet;

}
