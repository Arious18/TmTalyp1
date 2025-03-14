package tmtalyp.full;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories


public class FullApplication {

    public static void main(String[] args) {
        SpringApplication.run(FullApplication.class, args);
    }

}
