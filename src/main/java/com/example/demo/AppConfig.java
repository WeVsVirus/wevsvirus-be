package com.example.demo;


import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    /*
     * Use the standard Mongo driver API to create a com.mongodb.MongoClient instance.
     */
    public @Bean
    MongoClient mongoClient() {
        MongoClientURI uri = new MongoClientURI("mongodb://stimmungsbarometer-db:qNhQ4pFV7adTmN0iXCHzq4qFaNSayDp7eqWi9DX3TJhaMsMSqS1nYvQi58tebgKYxNHJvkZBz0alKJrlQI3e0w==@stimmungsbarometer-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@stimmungsbarometer-db@");
        return new MongoClient(uri);
    }
}