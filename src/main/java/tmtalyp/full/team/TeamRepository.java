package tmtalyp.full.team;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository // ✅ Ensure this annotation is present
public interface TeamRepository extends MongoRepository<Team, String> {
}
