package com.quizora.quizora_backend.projetQuizora.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "question")
public class QuestionEntity {
    @Id
    @Column(name = "idquestion", nullable = false)
    @Size(max=50)
    private String idquestion;

    private String enonce;
    private int tempsLimite;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private QuizEntity quiz;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<ReponseEntity> reponses = new ArrayList<>();

    public String getIdquestion() {
        return idquestion;
    }

    public void setIdquestion(String idquestion) {
        this.idquestion = idquestion;
    }

    public String getEnonce() {
        return enonce;
    }

    public void setEnonce(String enonce) {
        this.enonce = enonce;
    }

    public int getTempsLimite() {
        return tempsLimite;
    }

    public void setTempsLimite(int tempsLimite) {
        this.tempsLimite = tempsLimite;
    }

    public QuizEntity getQuiz() {
        return quiz;
    }

    public void setQuiz(QuizEntity quiz) {
        this.quiz = quiz;
    }

    public List<ReponseEntity> getReponses() {
        return reponses;
    }

    public void setReponses(List<ReponseEntity> reponses) {
        this.reponses = reponses;
    }
}
