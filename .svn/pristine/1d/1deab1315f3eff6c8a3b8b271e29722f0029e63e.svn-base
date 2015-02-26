package VisionBoard.metier;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import VisionBoard.entities.Collaborateur;
import VisionBoard.repositories.CollaborateurRepository;

@Service("métier")
public class Metier implements IMetier {

	@Autowired
	private CollaborateurRepository collaborateurRepository;

	//implémentation interface
	

	/**
	 * Sauvegarde un collaborateur
	 * @param collaborateur le collaborateur a sauvegarder
	 */
//	@Override
//	public void ajouterCollaborateur(Collaborateur collaborateur){
//		collaborateurRepository.save(collaborateur);
//	}

	@Override
	public List <Collaborateur> findByEnmission(Long enmission ){
		System.out.println("Entree findByEnmission ............");
		return collaborateurRepository.findByEnmission(enmission);
	
	}

	/**
	 * Retourne le nombre de collaborateurs en mission par pole
	 */
	@Override
	public Long nbrCollaborateurEnMissionParPole(Long idpole, Long enmission) {
		// TODO Auto-generated method stub
		return collaborateurRepository.countByIdpoleAndEnmission(idpole, enmission);
	}
	

	/**
	 * Retourne le nombre de collaborateurs en mission par Bu
	 */
	@Override
	public Long nbrCollaborateurEnMissionParBu(String Bu, String enMission) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * Retourne le nombre de collaborateurs en intercontrat par pole
	 */
	@Override
	public Long nbrCollaborateurEnInterParPole(String pole, String enMission) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * Retourne le nombre de collaborateurs en intercontrat par Bu
	 */
	@Override
	public Long nbrCollaborateurEnInterParBu(String pole, String enMission) {
		// TODO Auto-generated method stub
		return null;
	}

}
