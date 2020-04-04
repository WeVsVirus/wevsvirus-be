package wirvsvirus.hack.stimmungsbarometer.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;
import org.springframework.data.annotation.Id;
import wirvsvirus.hack.stimmungsbarometer.controller.model.Response;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;

@Value
@AllArgsConstructor
@Builder
@Deprecated
public class QuestionnaireResponseResource {

    @Id
    private final String id;

    @NotBlank
    private final String userId;

    @NotBlank
    @Pattern(regexp = "^(19|20)\\d\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$")
    private final String responseDate;
    private final List<Response<Integer>> moodResponses;
    private final List<Response<Double>> healthResponses;
    private final LocalDateTime updatedAt;
}
