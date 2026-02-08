package com.quizora.quizora_backend.projetQuizora.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "apprenant")
public class ApprenantEntity extends UserEntity{
    @OneToMany(mappedBy = "apprenant")
    private List<ParticipationEntity> participations = new ArrayList<>();

    public List<ParticipationEntity> getParticipations() {
        return participations;
    }

    public void setParticipations(List<ParticipationEntity> participations) {
        this.participations = participations;
    }
}
