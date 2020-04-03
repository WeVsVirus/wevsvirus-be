package wirvsvirus.hack.stimmungsbarometer.controller.model;

import lombok.Data;

@Data
public class Response<T> {
    private String questionId;
    private T response;
}
