package com.quizora.quizora_backend.projetQuizora.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.quizora.quizora_backend.projetQuizora.entity.UserEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {
    Optional<UserEntity> findByEmail(String email);
    boolean existsByEmail(String email);

    @Query(value = "SELECT generate_random_id(8)", nativeQuery = true) String generateRandomId();


}
