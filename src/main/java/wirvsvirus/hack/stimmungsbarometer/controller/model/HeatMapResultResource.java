package wirvsvirus.hack.stimmungsbarometer.controller.model;

import lombok.Data;

import java.util.List;

@Data
public class HeatMapResultResource {

    private List<Response<Integer>> moodResponses;
    private List<PersonResource> users;

}
