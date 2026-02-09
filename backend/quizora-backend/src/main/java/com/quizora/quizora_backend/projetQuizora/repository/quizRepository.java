package com.quizora.quizora_backend.projetQuizora.repository;

import com.quizora.quizora_backend.projetQuizora.entity.QuizEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface quizRepository extends JpaRepository<QuizEntity,String> {
}
