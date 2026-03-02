package com.quizora.quizora_backend.projetQuizora.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.quizora.quizora_backend.projetQuizora.service.ApprenantService;
@RestController
@RequestMapping("/api/apprenant")
public class ApprenantController {
    @Autowired
    ApprenantService apprenantService;

    //

}
