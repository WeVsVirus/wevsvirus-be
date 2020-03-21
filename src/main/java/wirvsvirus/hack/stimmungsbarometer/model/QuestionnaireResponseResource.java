package wirvsvirus.hack.stimmungsbarometer.model;

import org.springframework.data.annotation.Id;

import java.util.List;

public class QuestionnaireResponseResource {

    @Id
    private String id;

    private String userId;
    private String responseDate;
    private List<Response<Integer>> moodResponses;
    private List<Response<SimpleTime>> healthResponses;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
        this.id = (null == userId ? "" : userId) + (null == responseDate ? "" : responseDate);
    }

    public String getResponseDate() {
        return responseDate;
    }

    public void setResponseDate(String responseDate) {
        this.responseDate = responseDate;
        this.id = (null == userId ? "" : userId) + (null == responseDate ? "" : responseDate);
    }

    public List<Response<Integer>> getMoodResponses() {
        return moodResponses;
    }

    public void setMoodResponses(List<Response<Integer>> moodResponses) {
        this.moodResponses = moodResponses;
    }

    public List<Response<SimpleTime>> getHealthResponses() {
        return healthResponses;
    }

    public void setHealthResponses(List<Response<SimpleTime>> healthResponses) {
        this.healthResponses = healthResponses;
    }
}
