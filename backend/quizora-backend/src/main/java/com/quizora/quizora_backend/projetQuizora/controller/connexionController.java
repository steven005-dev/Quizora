package com.quizora.quizora_backend.projetQuizora.controller;

import com.quizora.quizora_backend.projetQuizora.entity.LoginRequest;
import com.quizora.quizora_backend.projetQuizora.entity.RegisterRequest;
import com.quizora.quizora_backend.projetQuizora.entity.ReponseEntity;
import com.quizora.quizora_backend.projetQuizora.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.quizora.quizora_backend.projetQuizora.service.UserService;
import com.quizora.quizora_backend.projetQuizora.configuration.SecurityConfig;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class connexionController {
    @Autowired
    UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest){
       UserEntity users = userService.FindByEmail(loginRequest.getEmail().trim());
       String email = users.getEmail();
       System.out.println(email);
        String responseMessage;
        // 2) si l'utilisateur n'existe paa
       if(users == null){
           responseMessage = "aucun users trouvé";
           System.out.println("Réponse envoyée : " + responseMessage);
           return ResponseEntity.badRequest().body(responseMessage);
       }
        // 3) vérifier le mot de passe
        if(!passwordEncoder.matches(loginRequest.getPassword(), users.getPassword())){
            responseMessage = "Mot de passe incorrect";
            System.out.println("Réponse envoyée : " + responseMessage);
            return ResponseEntity.badRequest().body(responseMessage);
        }

        responseMessage = "ok";
        System.out.println("Réponse envoyée : " + responseMessage);
        return ResponseEntity.ok(responseMessage);
    }
}