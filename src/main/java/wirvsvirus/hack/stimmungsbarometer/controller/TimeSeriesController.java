package wirvsvirus.hack.stimmungsbarometer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.service.TimeSeriesService;

@RestController
@RequiredArgsConstructor
public class TimeSeriesController {

    private final TimeSeriesService timeSeriesService;

    @GetMapping("/mood")
    public ResponseEntity<?> mood(String id) {
        return ResponseEntity.ok(timeSeriesService.moodListForUser(id));
    }

    @GetMapping("/health")
    public ResponseEntity<?> health(String id) {
        return ResponseEntity.ok(timeSeriesService.activitiesForUser(id));
    }

}
