package VisionBoard.tests;

import java.awt.DisplayMode;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import VisionBoard.config.DomainAndPersistenceConfig;
import VisionBoard.entities.Collaborateur;
import VisionBoard.metier.IMetier;

@SpringApplicationConfiguration(classes = DomainAndPersistenceConfig.class)
@RunWith(SpringJUnit4ClassRunner.class)
public class Metier {

	@Autowired
	private IMetier metier;
	private int enmission;
	
	@Test
	public void test1() {
//		Collaborateur collaborateur1 = new Collaborateur("Mr", "TEST1", "Bérenger", "102 rue de Maubeuge", "0621740363", "berenger.cappe@gmail.com",(long) 1,(long) 1,(long) 1);
//		Collaborateur collaborateur2 = new Collaborateur("Mr", "TEST2", "Bérenger", "102 rue de Maubeuge", "0621740363", "berenger.cappe@gmail.com",(long) 1,(long) 2,(long) 0);
//		Collaborateur collaborateur3 = new Collaborateur("Mr", "TEST3", "Bérenger", "102 rue de Maubeuge", "0621740363", "berenger.cappe@gmail.com",(long) 1,(long) 3 ,(long)1);
//		Collaborateur collaborateur4 = new Collaborateur("Mr", "TEST4", "Bérenger", "102 rue de Maubeuge", "0621740363", "berenger.cappe@gmail.com",(long) 4, (long)4,(long) 0);
		
		Long nbrCollabEnMissionPole1 = (long) 0;
		
		List list = new ArrayList<Collaborateur>();
		
		list = metier.findByEnmission((long)0);
		
		if (list != null && !list.isEmpty()) {
			System.out.println("Sortie findByEnMission: " + list.size());
		}
		
//		list.add(collaborateur1);
//		list.add(collaborateur2);
//		list.add(collaborateur3);
//		list.add(collaborateur4);
		
		
		nbrCollabEnMissionPole1 = metier.nbrCollaborateurEnMissionParPole((long) 2, (long)1);
		
//		List<Collaborateur> collaborateurs = métier.findByEnmission(enmission);
		
		System.out.println("Nbre de Collabs en misiion dans Pole 2 :" + nbrCollabEnMissionPole1);
		
		
	}


	
	// méthode utilitaire - affiche les éléments d'une collection
	private void display(String message, Iterable<?> elements) {
		System.out.println(message);
		for (Object element : elements) {
			System.out.println(element);
		}
	}

}