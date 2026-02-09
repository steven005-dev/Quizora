package com.quizora.quizora_backend.projetQuizora.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import com.quizora.quizora_backend.projetQuizora.entity.rolePlatfomeEntity;
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name="users")
public abstract class UserEntity {
    @Id
    @NotNull
    @Basic(optional = false)
    @Size(min=1, max = 50)
    @Column(name = "iduser")
    private String idusers;
    @NotNull
    @Basic(optional = false)
    @Column(name = "usernom")
    @Size(min=2, max=50)
    private String nom;

    @NotNull
    @Basic(optional = false)
    @Column(name = "userprenom")
    @Size(min=2, max=50)
    private String prenom;

    @Column(nullable = false,name ="email" ,unique = true)
    private String email;

   @NotNull
   @Size(min= 8,max = 255)
   @Basic(optional = false)
   @Column(name = "password")
    private String password;

    @Enumerated(EnumType.STRING)
    private rolePlatfomeEntity role;

    public String getIdusers() {
        return idusers;
    }

    public void setIdusers(String idusers) {
        this.idusers = idusers;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public rolePlatfomeEntity getRole() {
        return role;
    }

    public void setRole(rolePlatfomeEntity role) {
        this.role = role;
    }
}

