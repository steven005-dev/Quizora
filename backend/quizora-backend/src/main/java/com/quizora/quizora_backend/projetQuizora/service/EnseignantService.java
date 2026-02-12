package com.quizora.quizora_backend.projetQuizora.service;

import com.quizora.quizora_backend.projetQuizora.entity.EnseignantEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.quizora.quizora_backend.projetQuizora.repository.EnseignantRepository;

import java.util.List;

@Transactional
@Service(value = "EnseignantService")
public class EnseignantService {
    @Autowired
    EnseignantRepository enseignantRepository;
    public List<EnseignantEntity> FindAllEnseignant(){
       return enseignantRepository.findAll();
    }

    public EnseignantEntity SaveEnseignant(EnseignantEntity E){
        return enseignantRepository.save(E);
    }

    public EnseignantEntity FindById(String id){
        return enseignantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Enseigant non trouvé avec id : " + id));
    }

    public void deleteEnseignant(String id) {
        if (!enseignantRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        enseignantRepository.deleteById(id);
    }


}
