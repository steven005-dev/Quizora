package com.quizora.quizora_backend.projetQuizora.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "participations")
public class ParticipationEntity {
    @Id
    @Column(nullable = false,name = "idparticipation")
    @Size(max=50)
    private String idparticipation;

    @ManyToOne
    private ApprenantEntity apprenant;

    @ManyToOne
    private SessionJeuEntity sessionJeu;

    private int scoreFinal;
    @Enumerated(EnumType.STRING)
    private rolesessionEntity roleSession;

    private int nombreBonnesReponses;

    private int streakMax;

    public String getIdparticipation() {
        return idparticipation;
    }

    public void setIdparticipation(String idparticipation) {
        this.idparticipation = idparticipation;
    }

    public ApprenantEntity getApprenant() {
        return apprenant;
    }

    public void setApprenant(ApprenantEntity apprenant) {
        this.apprenant = apprenant;
    }

    public SessionJeuEntity getSessionJeu() {
        return sessionJeu;
    }

    public void setSessionJeu(SessionJeuEntity sessionJeu) {
        this.sessionJeu = sessionJeu;
    }

    public int getScoreFinal() {
        return scoreFinal;
    }

    public void setScoreFinal(int scoreFinal) {
        this.scoreFinal = scoreFinal;
    }

    public rolesessionEntity getRoleSession() {
        return roleSession;
    }

    public void setRoleSession(rolesessionEntity roleSession) {
        this.roleSession = roleSession;
    }

    public int getNombreBonnesReponses() {
        return nombreBonnesReponses;
    }

    public void setNombreBonnesReponses(int nombreBonnesReponses) {
        this.nombreBonnesReponses = nombreBonnesReponses;
    }

    public int getStreakMax() {
        return streakMax;
    }

    public void setStreakMax(int streakMax) {
        this.streakMax = streakMax;
    }
}
