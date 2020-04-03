package wirvsvirus.hack.stimmungsbarometer.controller.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import wirvsvirus.hack.stimmungsbarometer.config.ValidationPatterns;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class QuestionnaireResponseResource {

    @Id
    private String id;

    @NotBlank
    private String userId;

    @NotBlank
    @Pattern(regexp = ValidationPatterns.PATTERN_DATE)
    private String responseDate;
    private List<Response<Integer>> moodResponses;
    private List<Response<Double>> healthResponses;
    private LocalDateTime updatedAt = LocalDateTime.now();


    public void setUserId(String userId) {
        this.userId = userId;
        this.id = (null == userId ? "" : userId) + (null == responseDate ? "" : responseDate);
    }

    public void setResponseDate(String responseDate) {
        this.responseDate = responseDate;
        this.id = (null == userId ? "" : userId) + (null == responseDate ? "" : responseDate);
    }
}
