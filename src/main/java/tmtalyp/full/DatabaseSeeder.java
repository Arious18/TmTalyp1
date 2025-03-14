package tmtalyp.full.seeder;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import tmtalyp.full.universities.University;
import tmtalyp.full.universities.UniversityRepository;
import tmtalyp.full.team.Team;
import tmtalyp.full.team.TeamRepository;

import java.util.List;

@Configuration
public class DatabaseSeeder {

    @Bean
    CommandLineRunner initDatabase(UniversityRepository universityRepository, TeamRepository teamRepository) {
        return args -> {
            if (universityRepository.count() == 0) {
                universityRepository.saveAll(List.of(
                        new University(null, "Card Title 1", "Description for card 1", "1"),
                        new University(null, "Card Title 2", "Description for card 2", "2"),
                        new University(null, "Card Title 3", "Description for card 3", "2")
                ));
            }

            if (teamRepository.count() == 0) {
                teamRepository.saveAll(List.of(
                        new Team(null, "John Doe", 30, "123-456-7890", "john@example.com", "admin"),
                        new Team(null, "Alice Smith", 27, "987-654-3210", "alice@example.com", "user"),
                        new Team(null, "Bob Brown", 35, "555-666-7777", "bob@example.com", "manager")
                ));
            }
        };
    }
}
