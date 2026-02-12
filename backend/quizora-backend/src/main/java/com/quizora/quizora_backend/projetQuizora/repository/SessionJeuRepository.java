package com.quizora.quizora_backend.projetQuizora.repository;

import com.quizora.quizora_backend.projetQuizora.entity.SessionJeuEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SessionJeuRepository extends JpaRepository<SessionJeuEntity,String> {
}
