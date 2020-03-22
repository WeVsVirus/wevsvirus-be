package wirvsvirus.hack.stimmungsbarometer.model;

public enum Gender {

    MALE("MALE"),
    FEMALE("FEMALE"),
    DIVERS("DIVERS"),
    NONE("NONE");

    private String value;

    Gender(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
