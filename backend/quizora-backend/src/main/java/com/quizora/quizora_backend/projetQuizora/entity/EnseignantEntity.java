package com.quizora.quizora_backend.projetQuizora.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "enseignant")
public class EnseignantEntity extends UserEntity {
    @OneToMany(mappedBy = "createur")
    private List<QuizEntity> quizCrees = new ArrayList<>();

    public List<QuizEntity> getQuizCrees() {
        return quizCrees;
    }

    public void setQuizCrees(List<QuizEntity> quizCrees) {
        this.quizCrees = quizCrees;
    }
}
