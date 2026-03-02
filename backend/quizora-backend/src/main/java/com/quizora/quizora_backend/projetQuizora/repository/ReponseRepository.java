package com.quizora.quizora_backend.projetQuizora.repository;

import com.quizora.quizora_backend.projetQuizora.entity.ReponseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReponseRepository extends JpaRepository<ReponseEntity,String> {
    @Query(value = "SELECT generate_reponse_id()", nativeQuery = true) String generate_reponse_id();
}
