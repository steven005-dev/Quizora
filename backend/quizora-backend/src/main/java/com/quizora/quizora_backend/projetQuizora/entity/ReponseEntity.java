package com.quizora.quizora_backend.projetQuizora.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "reponse")
public class ReponseEntity {
    @Id
    @Column(name = "idreponse", nullable = false)
    @Size(max=50)
    private String idreponse;

    private String contenu;

    private boolean correcte;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private QuestionEntity question;

    public String getIdreponse() {
        return idreponse;
    }

    public void setIdreponse(String idreponse) {
        this.idreponse = idreponse;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public boolean isCorrecte() {
        return correcte;
    }

    public void setCorrecte(boolean correcte) {
        this.correcte = correcte;
    }

    public QuestionEntity getQuestion() {
        return question;
    }

    public void setQuestion(QuestionEntity question) {
        this.question = question;
    }
}
