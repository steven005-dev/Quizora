package com.quizora.quizora_backend.projetQuizora.repository;

import com.quizora.quizora_backend.projetQuizora.entity.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface questionRepository extends JpaRepository<QuestionEntity,String> {
}
