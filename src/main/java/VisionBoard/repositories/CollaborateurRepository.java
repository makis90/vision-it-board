package VisionBoard.repositories;

import java.util.List;

import VisionBoard.entities.Collaborateur;

import org.springframework.data.repository.CrudRepository;

public interface CollaborateurRepository extends CrudRepository<Collaborateur, Long> {
	
	// Rechercher un collaborateur par son Id
	Collaborateur findById(Long id);
	
	//....
	public List <Collaborateur> findByEnmission(Long enmission );
	
	
	// Nombre de Colaborateur en mission par pole 
	Long countByIdpoleAndEnmission(Long idpole, Long enmission);
}