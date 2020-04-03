package wirvsvirus.hack.stimmungsbarometer.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;
import org.springframework.data.annotation.Id;
import wirvsvirus.hack.stimmungsbarometer.controller.model.Gender;

import javax.validation.constraints.*;

/**
 * should be renamed to PersonEntity and moved to service.model package
 */
@Value
@AllArgsConstructor
@Builder
@Deprecated
public class PersonResource {

    @Id
    @NotBlank
    private String id;

    @NotNull
    private Gender gender;
    private Integer yearOfBirth;

    @Pattern(regexp = "\\d\\d\\d", message = "has to consist of three digits")
    private String plz;

    @PositiveOrZero
    @Max(10)
    private Integer householdSize;
    private Boolean pet;

}
