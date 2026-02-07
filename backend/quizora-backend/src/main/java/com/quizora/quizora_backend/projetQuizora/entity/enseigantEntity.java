package com.quizora.quizora_backend.projetQuizora.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.Date;

@Entity
@Table(name = "enseignant")

public class enseigantEntity {
    @Id
    @NotNull
    @Basic(optional = false)
    @Size(min = 1, max = 20)
    @Column(name = "idenseignant")
    private String ensignantId;
    @NotNull
    @Basic(optional = false)
    @Size(min = 1, max = 50)
    @Column(name = "nomenseignant")
    private String nom;
    @NotNull
    @Basic(optional = false)
    @Size(min = 1, max = 255)
    @Column(name = "prenomenseignant")
    private String prenom;
    @NotNull
    @Basic(optional = false)
    @Size(min = 1, max = 255)
    @Column(name = "eamailenseignat")
    private String emailenseignant;

    @NotNull
    @Basic(optional = false)
    @Size(min = 1, max = 255)
    @Column(name = "password")
    private String motDepasse;
    @NotNull
    @Column(name = "datecration")
    private Date datecreation;

    public String getEnsignantId() {
        return ensignantId;
    }

    public void setEnsignantId(String ensignantId) {
        this.ensignantId = ensignantId;
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

    public String getEmailenseignant() {
        return emailenseignant;
    }

    public void setEmailenseignant(String emailenseignant) {
        this.emailenseignant = emailenseignant;
    }

    public String getMotDepasse() {
        return motDepasse;
    }

    public void setMotDepasse(String motDepasse) {
        this.motDepasse = motDepasse;
    }

    public Date getDatecreation() {
        return datecreation;
    }

    public void setDatecreation(Date datecreation) {
        this.datecreation = datecreation;
    }
}
