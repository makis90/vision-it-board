package VisionBoard.metier;

import java.util.List;

import VisionBoard.entities.Collaborateur;

public interface IMetier {
	
		
//	public void ajouterCollaborateur(Collaborateur collaborateur);
	
	public List <Collaborateur> findByEnmission(Long enmission );
	
	// Nombre de collaborateurs en mission par pole
	public Long nbrCollaborateurEnMissionParPole(Long idpole, Long enmission);
	
	// Nombre de collaborateurs en mission par Bu
	public Long nbrCollaborateurEnMissionParBu(String Bu, String enMission);

	// Nombre de collaborateurs en intercontrat par pole
	public Long nbrCollaborateurEnInterParPole(String pole, String enMission);

	// Nombre de collaborateurs en intercontrat par Bu
	public Long nbrCollaborateurEnInterParBu(String pole, String enMission);

}