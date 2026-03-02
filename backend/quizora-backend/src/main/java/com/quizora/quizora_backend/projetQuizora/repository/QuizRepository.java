package com.quizora.quizora_backend.projetQuizora.repository;

import com.quizora.quizora_backend.projetQuizora.entity.QuizEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuizRepository extends JpaRepository<QuizEntity,String> {
    @Query(value = "SELECT generate_quiz_id()", nativeQuery = true) String generate_quiz_id();
}
