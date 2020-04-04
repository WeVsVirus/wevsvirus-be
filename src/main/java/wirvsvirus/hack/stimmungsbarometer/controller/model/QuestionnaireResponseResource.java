package wirvsvirus.hack.stimmungsbarometer.controller.model;

import lombok.Builder;
import lombok.Value;
import wirvsvirus.hack.stimmungsbarometer.config.ValidationPatterns;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;

@Value
@Builder
public class QuestionnaireResponseResource {

    @NotBlank
    private final String userId;

    @NotBlank
    @Pattern(regexp = ValidationPatterns.PATTERN_DATE)
    private final String responseDate;
    private final List<Response<Integer>> moodResponses;
    private final List<Response<Double>> healthResponses;
    private final LocalDateTime updatedAt = LocalDateTime.now();

}
