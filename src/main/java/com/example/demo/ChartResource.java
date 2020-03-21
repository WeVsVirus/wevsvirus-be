package com.example.demo;

import java.util.List;

public class ChartResource {
    private List<SeriesResource> series;

    public List<SeriesResource> getSeries() {
        return series;
    }

    public void setSeries(List<SeriesResource> series) {
        this.series = series;
    }
}
