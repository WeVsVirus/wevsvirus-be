package wirvsvirus.hack.stimmungsbarometer.config;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import org.apache.catalina.connector.Connector;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableConfigurationProperties
public class AppConfig {

    // Logger instance
    private static final Logger LOG = LoggerFactory.getLogger(AppConfig.class);

    @Value("${password}")
    String password;

    @Value("${server.http-port:0}")
    private Integer serverHttpPort;

    @Bean
    public WebServerFactoryCustomizer containerCustomizer() {
        return new TomcatWebServerHttpPortCustomizer();
    }

    /*
     * Use the standard Mongo driver API to create a com.mongodb.MongoClient instance.
     */
    public @Bean
    MongoClient mongoClient() {
        MongoClientURI uri = new MongoClientURI("mongodb://stimmungsbarometer-db:" + password + "@stimmungsbarometer-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&maxIdleTimeMS=120000&retrywrites=false&appName=@stimmungsbarometer-db@");
        return new MongoClient(uri);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*");
            }
        };
    }

    public class TomcatWebServerHttpPortCustomizer
            implements WebServerFactoryCustomizer<TomcatServletWebServerFactory> {
        @Override
        public void customize(TomcatServletWebServerFactory factory) {
            LOG.info("serverHttpPort property configured as {}", serverHttpPort);

            if (serverHttpPort > 0) {
                LOG.info("Configuring Http Port to {}", serverHttpPort);
                Connector connector = new Connector(TomcatServletWebServerFactory.DEFAULT_PROTOCOL);
                connector.setPort(serverHttpPort);
                factory.addAdditionalTomcatConnectors(connector);
            }
        }

    }
}



