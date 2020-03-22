package wirvsvirus.hack.stimmungsbarometer.controller;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import wirvsvirus.hack.stimmungsbarometer.model.QuestionnaireResponseResource;
import wirvsvirus.hack.stimmungsbarometer.model.Response;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
public class GenerateTestDataController {

    private static String[] moodIds = {"72eciMp5RMiA2u5dfwgtAX", "oDHa9ZEb5KNChgmJ65fBx2", "rdjhVEbqnope4vL8MfAJ9Y", "kcz8NZb2chFP1RiZdURTw2", "o4uyZ9so3oiuAzspbH3YPf", "ggonDssvB639H2Bzbd4ac2"};
    private static String[] healthIds = {"bJyjEuGz6VF3kwVxz7RQ8c", "rPjhtwjTyfAQ433jVDHSvU", "84rfLqZxi9X9Y8y9hQrLKB", "vSvCia11kNsj43DVqiMNF9", "bJyjEuGz6VF3kwVxz7RQ8c"};

    Random random = new Random();

    private MongoTemplate mongoTemplate;

    public GenerateTestDataController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping("/generate/{userId}")
    public ResponseEntity<?> generate(@PathVariable("userId") String userId, @RequestParam(required = false) int totalDays) {
        int totalDaysInternal = totalDays == 0 ? 10 : totalDays;
        LocalDate today = LocalDate.now();
        for (int i = 1; i <= totalDaysInternal; i++) {
            mongoTemplate.save(create(userId, today.minusDays(i)));
        }
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    private QuestionnaireResponseResource create(String userId, LocalDate date) {
        QuestionnaireResponseResource qr = new QuestionnaireResponseResource();
        qr.setUserId(userId);
        qr.setResponseDate(date.toString());

        List<Response<Integer>> moodResponses = new ArrayList<>();
        for (String moodId : moodIds) {
            moodResponses.add(generateRandomMoodResponseFor(moodId));
        }
        qr.setMoodResponses(moodResponses);

        List<Response<Double>> healthResponses = new ArrayList<>();
        for (String healthId : healthIds) {
            healthResponses.add(generateRandomHealthResponseFor(healthId));
        }
        qr.setHealthResponses(healthResponses);
        return qr;
    }

    private Response<Integer> generateRandomMoodResponseFor(String moodId) {
        Response<Integer> response = new Response<>();
        response.setQuestionId(moodId);
        response.setResponse(random.nextInt(100));
        return response;
    }


    private Response<Double> generateRandomHealthResponseFor(String moodId) {
        Response<Double> response = new Response<>();
        response.setQuestionId(moodId);
        response.setResponse(random.nextInt(15) + random.nextDouble());
        return response;
    }

}
