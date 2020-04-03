package wirvsvirus.hack.stimmungsbarometer.config;

import lombok.experimental.UtilityClass;

@UtilityClass
public class ValidationPatterns {

    public static final String PATTERN_DATE = "(19|20)\\d\\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])";

    public static final String ZIP3 = "\\d\\d\\d";
}
