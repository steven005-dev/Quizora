package com.quizora.quizora_backend.projetQuizora.service;
import com.quizora.quizora_backend.projetQuizora.entity.SessionJeuEntity;
import com.quizora.quizora_backend.projetQuizora.entity.UserEntity;
import com.quizora.quizora_backend.projetQuizora.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
@Service(value = "UserService")
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<UserEntity> FindAllUser(){
        return userRepository.findAll();
    }

    public UserEntity SaveUser(UserEntity U){
        return userRepository.save(U);
    }

    public UserEntity FindById(String id){
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur  non trouvé avec id : " + id));
    }

    public void deleteSession(String id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        userRepository.deleteById(id);
    }

    public UserEntity FindByEmail(String E){
        return userRepository.findByEmail(E)
                .orElseThrow(() -> new RuntimeException("email  non trouvé avec id : " + E));
    }

    public String getIduser(){
       return userRepository.generateRandomId();
    }

}
