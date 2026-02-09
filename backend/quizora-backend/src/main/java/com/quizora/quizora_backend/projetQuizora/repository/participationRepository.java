package com.quizora.quizora_backend.projetQuizora.repository;

import com.quizora.quizora_backend.projetQuizora.entity.ParticipationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface participationRepository extends JpaRepository<ParticipationEntity,String> {
}
