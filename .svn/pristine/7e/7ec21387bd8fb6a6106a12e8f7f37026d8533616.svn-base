package VisionBoard.entities;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class Personne {
	
	// attributs d'une personne
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	protected Long id;
	
	@Column(length = 5)
	private String titre;
	
	@Column(length = 20, nullable=false)
	private String nom;
	
	@Column(length = 20, nullable=false)
	private String prenom;
	
	@Column(length = 100, nullable=false)
	private String adresse;
	
	@Column(length = 20)
	private String telephone;
	
	@Column(length = 50)
	private String email;
	


	// constructeur par défaut
	public Personne() {
	}

	// constructeur avec paramètres
	public Personne(String titre, String nom, String prenom, String adresse, String telephone, String email) {
		this.titre = titre;
		this.nom = nom;
		this.prenom = prenom;
		this.adresse = adresse;
		this.telephone = telephone;
		this.email = email;
	}

	// toString
	public String toString() {
		return String.format("Personne[%s, %s, %s, %s, %s, %s, %s]", id, titre, nom, prenom, adresse, telephone, email);
	}

	// getters et setters
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}
	
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

}