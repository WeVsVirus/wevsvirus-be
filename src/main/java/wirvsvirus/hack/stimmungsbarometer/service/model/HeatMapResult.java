package wirvsvirus.hack.stimmungsbarometer.service.model;

import lombok.Builder;
import lombok.Value;
import wirvsvirus.hack.stimmungsbarometer.controller.model.PersonResource;
import wirvsvirus.hack.stimmungsbarometer.controller.model.Response;

import java.util.List;

@Value
@Builder
public class HeatMapResult {

    private final List<Response<Integer>> moodResponses;
    private final List<PersonResource> users;

}
