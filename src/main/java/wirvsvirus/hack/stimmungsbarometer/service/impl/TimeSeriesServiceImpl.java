package wirvsvirus.hack.stimmungsbarometer.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import wirvsvirus.hack.stimmungsbarometer.controller.model.Response;
import wirvsvirus.hack.stimmungsbarometer.model.QuestionnaireResponseResource;
import wirvsvirus.hack.stimmungsbarometer.service.TimeSeriesService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Component
@RequiredArgsConstructor
public class TimeSeriesServiceImpl implements TimeSeriesService {

    private final MongoTemplate mongoTemplate;

    @Override
    public Map<String, List> moodListForUser(String userId) {
        List<QuestionnaireResponseResource> result = mongoTemplate.find(query(where("userId").is(userId)), QuestionnaireResponseResource.class);

        Map<String, List> response = new HashMap<>();
        for (QuestionnaireResponseResource r : result) {
            for (Response<Integer> integerResponse : r.getMoodResponses()) {
                List inner = response.computeIfAbsent(integerResponse.getQuestionId(), map -> new ArrayList());
                List inn = new ArrayList();
                inn.add(r.getResponseDate());
                inn.add(integerResponse.getResponse());
                inner.add(inn);
            }
        }

        return response;
    }

    @Override
    public Map<String, Map> activitiesForUser(String userId) {
        List<QuestionnaireResponseResource> result = mongoTemplate.find(query(where("userId").is(userId)), QuestionnaireResponseResource.class);

        Map<String, Map> response = new HashMap<>();
        for (QuestionnaireResponseResource r : result) {
            for (Response<Double> integerResponse : r.getHealthResponses()) {
                Map innerMap = response.computeIfAbsent(integerResponse.getQuestionId(), map -> new HashMap());
                innerMap.put(r.getResponseDate(), integerResponse.getResponse());
            }
        }

        return response;
    }

}
