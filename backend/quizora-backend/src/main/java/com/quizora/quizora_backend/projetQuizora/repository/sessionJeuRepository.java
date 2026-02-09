package com.quizora.quizora_backend.projetQuizora.repository;

import com.quizora.quizora_backend.projetQuizora.entity.SessionJeuEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface sessionJeuRepository extends JpaRepository<SessionJeuEntity,String> {
}
