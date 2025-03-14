package tmtalyp.full.universities;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UniversityRepository extends MongoRepository<University, String> {
}
