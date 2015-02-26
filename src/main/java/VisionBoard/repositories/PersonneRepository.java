package VisionBoard.repositories;

import VisionBoard.entities.Personne;
import org.springframework.data.repository.CrudRepository;

public interface PersonneRepository extends CrudRepository<Personne, Long> {
	
	
}