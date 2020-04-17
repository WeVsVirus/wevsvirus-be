package wirvsvirus.hack.stimmungsbarometer.service;

import java.util.List;
import java.util.Map;

public interface TimeSeriesService {

    Map<String, Map> moodListForUser(String userId);

    Map<String, Map> activitiesForUser(String userId);
}
