package com.quizora.quizora_backend.projetQuizora.controller;

import com.quizora.quizora_backend.projetQuizora.entity.EnseignantEntity;
import com.quizora.quizora_backend.projetQuizora.entity.QuestionEntity;
import com.quizora.quizora_backend.projetQuizora.entity.QuizEntity;
import com.quizora.quizora_backend.projetQuizora.entity.ReponseEntity;
import com.quizora.quizora_backend.projetQuizora.service.QuestionService;
import com.quizora.quizora_backend.projetQuizora.service.QuizService;
import com.quizora.quizora_backend.projetQuizora.service.ReponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/quiz")
public class QuizController {
    @Autowired
    QuizService quizService;
    @Autowired
    QuestionService questionService;
    @Autowired
    ReponseService reponseService;
    // Ajouter quiz
    @PostMapping("/add")
    public ResponseEntity<String> AjouterQuiz(@RequestBody QuizEntity q){
    String quiz_id = quizService.GenerateQuizId();
    q.setIdquiz(quiz_id);
    for (QuestionEntity questions : q.getQuestions()){
        questions.setIdquestion(questionService.GenererIdQuestion());
        questions.setQuiz(q);
        for(ReponseEntity reponses : questions.getReponses()){
            reponses.setIdreponse(reponseService.GenererIdReponse());
            reponses.setQuestion(questions);

        }

    }
    quizService.SaveQuiz(q);
     return ResponseEntity.ok("Quiz enregistrer avec succès");
    }
    // Supprimer Quiz
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteQuiz(@PathVariable String id) {
        quizService.deleteQuiz(id);
        return ResponseEntity.ok("Quiz supprimé avec succès");
    }
    //Modifier Quiz

    @PutMapping("/id")
    public ResponseEntity<QuizEntity> update_quiz (@PathVariable String id,
                                                   @RequestBody QuizEntity newQuiz){
        if(!quizService.ExisteById(id)){
            return ResponseEntity.notFound().build();
        }

        QuizEntity update = quizService.ModifierQuiz(id,newQuiz);
        return ResponseEntity.ok(update);

    }


}
