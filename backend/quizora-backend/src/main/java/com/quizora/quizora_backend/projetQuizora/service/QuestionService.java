package com.quizora.quizora_backend.projetQuizora.service;

import com.quizora.quizora_backend.projetQuizora.entity.ParticipationEntity;
import com.quizora.quizora_backend.projetQuizora.entity.QuizEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.quizora.quizora_backend.projetQuizora.repository.QuestionRepository;
import com.quizora.quizora_backend.projetQuizora.entity.QuestionEntity;

import java.util.List;

@Transactional
@Service(value = "QuestionService")
public class QuestionService {
    @Autowired
    QuestionRepository questionRepository;

    public List<QuestionEntity> FindAllQuestion(){
        return questionRepository.findAll();
    }

    public QuestionEntity SaveQuestion (QuestionEntity Q){
        return questionRepository.save(Q);
    }

    public QuestionEntity FindById(String id){
        return questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("question non trouvé avec id : " + id));
    }

    public void deleteParticipation(String id) {
        if (!questionRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        questionRepository.deleteById(id);
    }
}
