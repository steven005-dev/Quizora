package com.quizora.quizora_backend.projetQuizora.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "sessions_jeu")
public class SessionJeuEntity {
    @Id
    @Column(name = "idsession",nullable = false)
    @Size(max=50)
    private String idsession;
    @Column(unique = true, name = "codesession")
    private String codeSession;

    @Enumerated(EnumType.STRING)
    private ModeJeuEntity mode;

    private LocalDateTime dateDebut;
    private LocalDateTime dateFin;

    @ManyToOne
    private QuizEntity quiz;

    @OneToMany(mappedBy = "sessionJeu")
    private List<ParticipationEntity> participations = new ArrayList<>();

    public String getIdsession() {
        return idsession;
    }

    public void setIdsession(String idsession) {
        this.idsession = idsession;
    }

    public String getCodeSession() {
        return codeSession;
    }

    public void setCodeSession(String codeSession) {
        this.codeSession = codeSession;
    }

    public ModeJeuEntity getMode() {
        return mode;
    }

    public void setMode(ModeJeuEntity mode) {
        this.mode = mode;
    }

    public LocalDateTime getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDateTime dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDateTime getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDateTime dateFin) {
        this.dateFin = dateFin;
    }

    public QuizEntity getQuiz() {
        return quiz;
    }

    public void setQuiz(QuizEntity quiz) {
        this.quiz = quiz;
    }

    public List<ParticipationEntity> getParticipations() {
        return participations;
    }

    public void setParticipations(List<ParticipationEntity> participations) {
        this.participations = participations;
    }
}
