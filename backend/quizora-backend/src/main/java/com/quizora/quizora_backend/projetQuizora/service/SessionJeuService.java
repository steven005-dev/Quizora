package com.quizora.quizora_backend.projetQuizora.service;

import com.quizora.quizora_backend.projetQuizora.entity.ReponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.quizora.quizora_backend.projetQuizora.repository.SessionJeuRepository;
import com.quizora.quizora_backend.projetQuizora.entity.SessionJeuEntity;

import java.util.List;

@Transactional
@Service(value = "SessionjeuService")
public class SessionJeuService {
    @Autowired
    SessionJeuRepository sessionJeuRepository;

    public List<SessionJeuEntity> FindAllSession(){
        return sessionJeuRepository.findAll();
    }

    public SessionJeuEntity SaveSession  (SessionJeuEntity R){
        return sessionJeuRepository.save(R);
    }

    public SessionJeuEntity FindById(String id){
        return sessionJeuRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Session non trouvé avec id : " + id));
    }

    public void deleteSession(String id) {
        if (!sessionJeuRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        sessionJeuRepository.deleteById(id);
    }
}
