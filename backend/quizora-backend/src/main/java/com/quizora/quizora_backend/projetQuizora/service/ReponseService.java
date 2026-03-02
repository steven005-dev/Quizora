package com.quizora.quizora_backend.projetQuizora.service;

import com.quizora.quizora_backend.projetQuizora.entity.QuizEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.quizora.quizora_backend.projetQuizora.repository.ReponseRepository;
import com.quizora.quizora_backend.projetQuizora.entity.ReponseEntity;

import java.util.List;

@Transactional
@Service(value = "ReponseService")
public class ReponseService {
    @Autowired
    ReponseRepository reponseRepository;

    public List<ReponseEntity> FindAllReponse(){
        return reponseRepository.findAll();
    }

    public ReponseEntity SaveReponse (ReponseEntity R){
        return reponseRepository.save(R);
    }

    public ReponseEntity FindById(String id){
        return reponseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reponse non trouvé avec id : " + id));
    }

    public void deleteReponse(String id) {
        if (!reponseRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        reponseRepository.deleteById(id);
    }

    public String GenererIdReponse(){
        return reponseRepository.generate_reponse_id();
    }

    public ReponseEntity ModifierReponse(String id, ReponseEntity R){
        ReponseEntity existent = FindById(id);
        existent.setContenu(R.getContenu());
        existent.setCorrecte(R.isCorrecte());
        return reponseRepository.save(R);
    }

    public Boolean exist_reponse(String id){
        return reponseRepository.existsById(id);
    }

}
