# 🗺️ ROADMAP D’IMPLÉMENTATION — QUIZORA

## 🔴 RÈGLE D’OR (avant de commencer)

👉 **Ne code JAMAIS tout en même temps**\
👉 Chaque phase doit produire **quelque chose qui marche**

---

## 🧩 PHASE 0 — Préparation (1–2 jours)

### Objectif

Avoir un projet **propre, structuré, prêt à évoluer**

### Actions

- Créer un repo Git (GitHub / GitLab)
- Créer 2 dossiers :

```text
quizora-frontend/
quizora-backend/
```

- Rédiger un `README.md` (vision, stack, règles)

✔️ Livrable : repo propre

---

## 🧩 PHASE 1 — Backend cœur (Spring Boot + PostgreSQL) (5–7 jours)

### Objectif

👉 **Le système doit fonctionner sans temps réel**

### Étapes

1. Créer le projet Spring Boot

   - Web
   - JPA
   - Security
   - PostgreSQL

2. Implémenter les **entités JPA**

   - Utilisateur (héritage)
   - Quiz
   - Question
   - Réponse
   - Participation
   - SessionJeu

3. Créer les repositories

   - `JpaRepository`

4. Créer les services métier

   - QuizService
   - SessionService
   - ParticipationService

5. Créer les contrôleurs REST

   - CRUD quiz
   - CRUD questions
   - Lancer une session

✔️ Livrable : API REST fonctionnelle

---

## 🧩 PHASE 2 — Authentification & rôles (2–3 jours)

### Objectif

Sécuriser la plateforme

### Actions

- Spring Security
- JWT
- Rôles :
  - ADMIN
  - ENSEIGNANT
  - APPRENANT
- Routes protégées

✔️ Livrable : login / register sécurisé

---

## 🧩 PHASE 3 — Frontend de base (React) (5–7 jours)

### Objectif

👉 Naviguer dans l’application

### Actions

- Créer projet React (Vite + TypeScript)
- Routing (React Router)
- Pages :
  - Login / Register
  - Accueil
  - Créer quiz
  - Liste quiz
- Connexion à l’API REST

✔️ Livrable : UI fonctionnelle (sans jeu live)

---

## 🧩 PHASE 4 — Temps réel (le cœur du jeu) (5–7 jours)

### Objectif

👉 Faire jouer **plusieurs joueurs en même temps**

### Backend

- Spring WebSocket (STOMP)
- Gestion des rooms
- Session runtime (en mémoire ou Redis)
- Gestion :
  - réponses
  - scores
  - streak

### Frontend

- Connexion WebSocket
- Réception questions
- Envoi réponses
- Classement live

✔️ Livrable : partie jouable en direct

---

## 🧩 PHASE 5 — Logique de scoring & règles (2–3 jours)

### Objectif

Rendre le jeu **intelligent et équitable**

### Actions

- Implémenter :
  - bonus de streak
  - pénalité si réponse fausse
- Synchronisation score temps réel → score final

✔️ Livrable : scoring crédible

---

## 🧩 PHASE 6 — Interface avancée & UX (3–5 jours)

### Objectif

👉 Rendre Quizora agréable à utiliser

### Actions

- Animations (Framer Motion)
- Feedback visuel
- Classement stylé
- Mode Apprentissage

✔️ Livrable : UX aboutie

---

## 🧩 PHASE 7 — Tests & robustesse (2–3 jours)

### Objectif

Éviter les bugs critiques

### Actions

- Tests unitaires (JUnit)
- Tests WebSocket
- Tests de charge légère (50 joueurs)

✔️ Livrable : app stable

---

## 🧩 PHASE 8 — Déploiement (2–3 jours)

### Objectif

👉 Rendre l’app accessible

### Actions

- Backend :
  - Docker
  - PostgreSQL
- Frontend :
  - build React
- Nginx
- Déploiement VPS / cloud

✔️ Livrable : app en ligne

---

## ⏱️ Durée réaliste totale

🕒 **4 à 6 semaines** (en solo)

---

## 🎯 CONSEILS TRÈS IMPORTANTS

- Commence **sans WebSocket**
- Commence **sans Redis**
- Commence **sans animations**
- Ajoute la complexité **progressivement**

👉 C’est comme ça qu’on termine un projet.

---

## 🔥 Prochaine action IMMÉDIATE (maintenant)

👉 Créer le **backend Spring Boot** 👉 Créer les **entités JPA**

Si tu veux, au prochain message je peux :

- te générer la **structure exacte du projet Spring Boot**
- écrire la **première entité JPA**
- ou t’aider à découper les **tickets de développement**

