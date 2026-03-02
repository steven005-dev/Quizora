package com.quizora.quizora_backend.projetQuizora.entity;

public class RegisterRequest {
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private rolePlatfomeEntity role;

    public RegisterRequest() {}

    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }

    public String getPrenom() { return prenom; }
    public void setPrenom(String prenom) { this.prenom = prenom; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public rolePlatfomeEntity getRole() { return role; }
    public void setRole(rolePlatfomeEntity role) { this.role = role; }
}
