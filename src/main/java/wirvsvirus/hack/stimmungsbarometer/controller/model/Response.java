package wirvsvirus.hack.stimmungsbarometer.controller.model;

import lombok.Value;

@Value
public class Response<T> {
    private String questionId;
    private T response;
}
