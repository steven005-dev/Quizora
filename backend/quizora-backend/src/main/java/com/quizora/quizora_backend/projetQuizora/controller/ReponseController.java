package com.quizora.quizora_backend.projetQuizora.controller;

import com.quizora.quizora_backend.projetQuizora.entity.ReponseEntity;
import com.quizora.quizora_backend.projetQuizora.service.ReponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reponse")
public class ReponseController {
    @Autowired
    ReponseService reponseService;
    @PostMapping("/add")
    public ResponseEntity<String> AjouterReponse (ReponseEntity R){
    if(R.getContenu() == null){
        return ResponseEntity.badRequest().build();
    }

    else {
        String id_reponse = reponseService.GenererIdReponse();
        R.setIdreponse(id_reponse);
        R.setContenu(R.getContenu());
        R.setCorrecte(R.isCorrecte());
        reponseService.SaveReponse(R);
        return ResponseEntity.ok("reponse Enregistrer");
    }

    }
    @PutMapping("/id")
    public ResponseEntity<ReponseEntity> MondifierReponse(@PathVariable String id,
                                                          ReponseEntity new_reponse){

        if(!reponseService.exist_reponse(id)){
            return ResponseEntity.notFound().build();
        }

       ReponseEntity update = reponseService.ModifierReponse(id, new_reponse);
       return ResponseEntity.ok(update);
    }

    @DeleteMapping("/delete/id")
    public ResponseEntity<String> SupprimerReponse(@PathVariable String id){
        if(!reponseService.exist_reponse(id)){
            return ResponseEntity.badRequest().build();
        }

        else {
            reponseService.deleteReponse(id);
            return ResponseEntity.ok("Question supprimer");
        }
    }
    }

