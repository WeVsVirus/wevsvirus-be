package wirvsvirus.hack.stimmungsbarometer.controller.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import wirvsvirus.hack.stimmungsbarometer.config.ValidationPatterns;

import javax.validation.constraints.*;

@Data
public class PersonResource {

    @Id
    @NotBlank
    private String id;

    @NotNull
    private Gender gender;
    private Integer yearOfBirth;

    @Pattern(regexp = ValidationPatterns.ZIP3, message = "has to consist of three digits")
    private String plz;

    @PositiveOrZero
    @Max(10)
    private Integer householdSize;
    private Boolean pet;

}
