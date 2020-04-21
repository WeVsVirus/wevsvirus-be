package wirvsvirus.hack.stimmungsbarometer.controller.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Gender {

    MALE("MALE"),
    FEMALE("FEMALE"),
    DIVERS("DIVERS"),
    NONE("NONE");

    @Getter
    private final String value;
}
