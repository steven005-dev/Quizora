package com.quizora.quizora_backend.projetQuizora.service;

import com.quizora.quizora_backend.projetQuizora.entity.EnseignantEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.quizora.quizora_backend.projetQuizora.repository.ParticipationRepository;
import com.quizora.quizora_backend.projetQuizora.entity.ParticipationEntity;

import java.util.List;

@Transactional
@Service(value = "ParticipationService")
public class ParticipationService {
    @Autowired
    ParticipationRepository participationRepository;

    public List<ParticipationEntity> FindAllParticipation(){
        return participationRepository.findAll();
    }

    public ParticipationEntity SaveParticipation (ParticipationEntity P){
        return participationRepository.save(P);
    }

    public ParticipationEntity FindById(String id){
        return participationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("participation non trouvé avec id : " + id));
    }

    public void deleteParticipation(String id) {
        if (!participationRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        participationRepository.deleteById(id);
    }
}
