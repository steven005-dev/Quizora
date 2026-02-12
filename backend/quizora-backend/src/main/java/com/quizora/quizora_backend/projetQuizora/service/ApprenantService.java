package com.quizora.quizora_backend.projetQuizora.service;

import com.quizora.quizora_backend.projetQuizora.entity.ApprenantEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.quizora.quizora_backend.projetQuizora.repository.ApprenantRepository;

import java.util.List;

@Transactional
@Service(value = "apprenantService")
public class ApprenantService {
    @Autowired
    ApprenantRepository apprenantRepository;

    public List<ApprenantEntity> FindAllApprenant(){
        return apprenantRepository.findAll();
    }

    public ApprenantEntity SaveApprenant(ApprenantEntity p){
        return apprenantRepository.save(p);
    }

    public ApprenantEntity findById(String id) {
        return apprenantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Apprenant non trouvé avec id : " + id));
    }

    public void deleteApprenant(String id) {
        if (!apprenantRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        apprenantRepository.deleteById(id);
    }

}
