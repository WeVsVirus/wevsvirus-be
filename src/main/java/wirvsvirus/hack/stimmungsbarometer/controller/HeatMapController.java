package wirvsvirus.hack.stimmungsbarometer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.config.ValidationPatterns;
import wirvsvirus.hack.stimmungsbarometer.service.HeatMapService;

import javax.validation.Valid;
import javax.validation.constraints.Pattern;

@RestController
@RequiredArgsConstructor
public class HeatMapController {

    private final HeatMapService heatMapService;

    @GetMapping("/heat")
    public ResponseEntity<?> heat(@Valid @Pattern(regexp = ValidationPatterns.PATTERN_DATE) String responseDate) {
        return ResponseEntity.ok(heatMapService.heatMap(responseDate));
    }

}
