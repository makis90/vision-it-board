package VisionBoard.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "collaborateur")
public class Collaborateur extends Personne {
	
	@Column(length = 50, nullable=true)
	int idpole;
	@Column(length = 50, nullable=true)
	int idbu;
	@Column(length = 20, nullable=false)
	int enmission;
	
	
	
	// constructeur par défaut
	public Collaborateur() {
	}

	// constructeur avec paramètres
	public Collaborateur(String titre, String nom, String prenom, String adresse, String telephone, String email,int idpole) {
		super(titre, nom, prenom, adresse, telephone, email);
		this.idpole = idpole;
	}
	
	public int getIdpole() {
		return idpole;
	}

	public void setIdpole(int idpole) {
		this.idpole = idpole;
	}

	public int getIdbu() {
		return idbu;
	}

	public void setIdbu(int idbu) {
		this.idbu = idbu;
	}

	public int getEnmission() {
		return enmission;
	}

	public void setEnmission(int enmission) {
		this.enmission = enmission;
	}

	@Override
	public String toString() {
		return "Collaborateur [idpole=" + idpole + ", idbu=" + idbu
				+ ", enmission=" + enmission + ", id=" + id  + super.toString()+ "]";
	}
}
