package wirvsvirus.hack.stimmungsbarometer.controller.model;

import lombok.Builder;
import lombok.Value;

import java.util.List;

@Value
@Builder
public class HeatMapResultResource {

    private List<Response<Integer>> moodResponses;
    private List<PersonResource> users;

}
