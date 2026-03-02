package com.quizora.quizora_backend.projetQuizora.repository;

import com.quizora.quizora_backend.projetQuizora.entity.QuestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepository extends JpaRepository<QuestionEntity,String> {
    @Query(value = "SELECT generate_question_id()", nativeQuery = true) String generate_question_id();
}
