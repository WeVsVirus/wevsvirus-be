package wirvsvirus.hack.stimmungsbarometer.service;

import java.util.List;
import java.util.Map;

public interface HeatMapService {

    Map<String, List> heatMap(String date);
}
