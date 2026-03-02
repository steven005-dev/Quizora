package com.quizora.quizora_backend.projetQuizora.controller;

import com.quizora.quizora_backend.projetQuizora.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.quizora.quizora_backend.projetQuizora.configuration.SecurityConfig;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.quizora.quizora_backend.projetQuizora.service.UserService;
import com.quizora.quizora_backend.projetQuizora.entity.rolePlatfomeEntity;
@RestController
@RequestMapping("/api/inscription")
public class InscriptionController {
    @Autowired
    UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/add")
    public ResponseEntity<?> SaveUser(@RequestBody RegisterRequest users) {
        if (users == null || users.getRole() == null) {
            return ResponseEntity
                    .badRequest()
                    .body("le rôle est obligatoire");

        }

        if (users.getEmail() == null || users.getPassword() == null) {
            return ResponseEntity
                    .badRequest()
                    .body("Email et mot de passe obligatoires");
        }

        String motDepasse = passwordEncoder.encode(users.getPassword());

        if (users.getRole() == rolePlatfomeEntity.ENSEIGNANT) {
            System.out.println("enregistrement Enseignant");
            EnseignantEntity E = new EnseignantEntity();
            String idEnseignant = userService.getIduser();
            E.setIdusers(idEnseignant);
            E.setNom(users.getNom());
            E.setPrenom(users.getPrenom());
            E.setEmail(users.getEmail());
            E.setPassword(motDepasse);
            E.setRole(rolePlatfomeEntity.ENSEIGNANT);
            userService.SaveUser(E);
            return ResponseEntity.ok("ok");


        } else if (users.getRole() == rolePlatfomeEntity.APPRENANT) {
            System.out.println("Enregistrement Apprenant");
            ApprenantEntity A = new ApprenantEntity();
            A.setIdusers(userService.getIduser());
            A.setNom(users.getNom());
            A.setPrenom(users.getPrenom());
            A.setEmail(users.getEmail());
            A.setPassword(motDepasse);
            A.setRole(rolePlatfomeEntity.APPRENANT);
            userService.SaveUser(A);
            return ResponseEntity.ok("ok");


        } else {
            System.out.println("erreur d'enregistrement");
        }
        return ResponseEntity
                .badRequest()
                .body("Rôle invalide");
    }

}
