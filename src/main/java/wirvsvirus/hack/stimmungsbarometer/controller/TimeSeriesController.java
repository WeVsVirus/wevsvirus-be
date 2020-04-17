package wirvsvirus.hack.stimmungsbarometer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.service.TimeSeriesService;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class TimeSeriesController {

    private final TimeSeriesService timeSeriesService;

    @GetMapping("/mood")
    public ResponseEntity<Map<String, Map>> mood(String id) {
        return ResponseEntity.ok(timeSeriesService.moodListForUser(id));
    }

    @GetMapping("/health")
    @Deprecated
    /**
     * @deprecated  "/activity" should be used instead
     */
    public ResponseEntity<Map<String, Map>> health(String id) {
        return activity(id);
    }

    @GetMapping("/activity")
    public ResponseEntity<Map<String, Map>> activity(String id) {
        return ResponseEntity.ok(timeSeriesService.activitiesForUser(id));
    }

}
