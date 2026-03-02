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

    public void deleteQuestion(String id) {
        if (!questionRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        questionRepository.deleteById(id);
    }

    public String GenererIdQuestion(){
        return questionRepository.generate_question_id();
    }

    public Boolean ExistQuestion (String id){
        return questionRepository.existsById(id);    }

    public QuestionEntity ModifierQuestion(String id, QuestionEntity q){
        QuestionEntity existent = FindById(id);
        existent.setEnonce(q.getEnonce());
        existent.setTypeQuestion(q.getTypeQuestion());
        existent.setTempsLimite(q.getTempsLimite());
        existent.setQuiz(q.getQuiz());
        existent.setReponses(q.getReponses());
        return   questionRepository.save(existent);

    }

}
