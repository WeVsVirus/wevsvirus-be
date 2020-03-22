package wirvsvirus.hack.stimmungsbarometer.model;

import java.util.List;

public class HeatMapResult {

    private List<Response<Integer>> moodResponses;
    private List<PersonResource> users;

    public List<PersonResource> getUsers() {
        return users;
    }

    public void setUsers(List<PersonResource> users) {
        this.users = users;
    }

    public List<Response<Integer>> getMoodResponses() {
        return moodResponses;
    }

    public void setMoodResponses(List<Response<Integer>> moodResponses) {
        this.moodResponses = moodResponses;
    }
}
