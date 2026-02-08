package com.quizora.quizora_backend.projetQuizora.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "quiz")
public class QuizEntity {
     @Id
     @Size(max=50)
     @Column(name = "idquiz",nullable = false)
    private String idquiz;
    private String titre;
    private String description;
    private String niveau;

    @ManyToOne
    @JoinColumn(name = "enseignant_id")
    private EnseignantEntity createur;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL)
    private List<EnseignantEntity> questions = new ArrayList<>();

    public String getIdquiz() {
        return idquiz;
    }

    public void setIdquiz(String idquiz) {
        this.idquiz = idquiz;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public EnseignantEntity getCreateur() {
        return createur;
    }

    public void setCreateur(EnseignantEntity createur) {
        this.createur = createur;
    }

    public List<EnseignantEntity> getQuestions() {
        return questions;
    }

    public void setQuestions(List<EnseignantEntity> questions) {
        this.questions = questions;
    }
}
