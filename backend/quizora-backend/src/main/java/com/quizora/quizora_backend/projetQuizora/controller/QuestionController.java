package com.quizora.quizora_backend.projetQuizora.controller;

import com.quizora.quizora_backend.projetQuizora.entity.QuestionEntity;
import com.quizora.quizora_backend.projetQuizora.entity.ReponseEntity;
import com.quizora.quizora_backend.projetQuizora.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/question")
public class QuestionController {
    @Autowired
    QuestionService questionService;

    //Methode POST
    @PostMapping("/add")
    public ResponseEntity<String> AjouterQuistion (@RequestBody QuestionEntity q) {
        if (q == null) {
            return ResponseEntity.badRequest().body("question nom remplis");
        } else {
            String id_question = questionService.GenererIdQuestion();
            q.setIdquestion(id_question);
            q.setEnonce(q.getEnonce());
            q.setTypeQuestion(q.getTypeQuestion());
            q.setTempsLimite(q.getTempsLimite());
            q.setQuiz(q.getQuiz());
            q.setReponses(q.getReponses());
            questionService.SaveQuestion(q);
            return ResponseEntity.ok("Question Enregistré");

        }


    }
        // Methode PUT
    @PutMapping("/id")
    public ResponseEntity<QuestionEntity> ModifierQuestion (@PathVariable String id,
                                                    QuestionEntity new_question){
        if(!questionService.ExistQuestion(id)){
            return ResponseEntity.notFound().build();
        }

        else {
            QuestionEntity update = questionService.ModifierQuestion(id,new_question);
            return ResponseEntity.ok(update);
        }

    }

    //Methode DELETE
    @DeleteMapping("/delete/id")
    public ResponseEntity<String> SupprimerQuestion (@PathVariable String id){

        if(!questionService.ExistQuestion(id)){
            return ResponseEntity.badRequest().build();
        }

        else {
            questionService.deleteQuestion(id);
            return ResponseEntity.ok("Question supprimer");
        }
    }


}
