package com.quizora.quizora_backend.projetQuizora.service;

import com.quizora.quizora_backend.projetQuizora.entity.QuestionEntity;
import com.quizora.quizora_backend.projetQuizora.entity.QuizEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.quizora.quizora_backend.projetQuizora.repository.QuizRepository;

import java.util.List;

@Transactional
@Service(value = "QuizService")
public class QuizService {
    @Autowired
    QuizRepository quizRepository;

    public List<QuizEntity> FindAllQuiz(){
        return quizRepository.findAll();
    }

    public QuizEntity SaveQuiz (QuizEntity Q){
        return quizRepository.save(Q);
    }

    public QuizEntity FindById(String id){
        return quizRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("question non trouvé avec id : " + id));
    }

    public void deleteQuiz(String id) {
        if (!quizRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        quizRepository.deleteById(id);
    }

}
