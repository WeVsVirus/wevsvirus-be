package com.example.demo.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class QuestionnaireResponse {

    private String userId;
    private LocalDate responseDate;
    private List<Response<Integer>> moodResponses;
    private List<Response<LocalTime>> healthResponses;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public LocalDate getResponseDate() {
        return responseDate;
    }

    public void setResponseDate(LocalDate responseDate) {
        this.responseDate = responseDate;
    }

    public List<Response<Integer>> getMoodResponses() {
        return moodResponses;
    }

    public void setMoodResponses(List<Response<Integer>> moodResponses) {
        this.moodResponses = moodResponses;
    }

    public List<Response<LocalTime>> getHealthResponses() {
        return healthResponses;
    }

    public void setHealthResponses(List<Response<LocalTime>> healthResponses) {
        this.healthResponses = healthResponses;
    }
}
