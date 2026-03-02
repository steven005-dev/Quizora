package com.quizora.quizora_backend.projetQuizora.service;

import com.quizora.quizora_backend.projetQuizora.entity.QuestionEntity;
import com.quizora.quizora_backend.projetQuizora.entity.QuizEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.quizora.quizora_backend.projetQuizora.repository.QuizRepository;

import java.util.List;
import java.util.Optional;

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

    public QuizEntity ModifierQuiz(String id, QuizEntity q){
        QuizEntity existent = FindById(id);
        existent.setTitre(q.getTitre());
        existent.setDescription(q.getDescription());
        existent.setCreateur(q.getCreateur());
       return quizRepository.save(existent);
    }

    public void deleteQuiz(String id) {
        if (!quizRepository.existsById(id)) {
            throw new RuntimeException("Impossible de supprimer, apprenant introuvable avec id : " + id);
        }
        quizRepository.deleteById(id);
    }

    public String GenerateQuizId(){
        return quizRepository.generate_quiz_id();
    }

    public Boolean ExisteById(String id){
        return quizRepository.existsById(id);
    }

}
