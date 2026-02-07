# 🎮 Quizora

**Quizora** est une plateforme web de quiz interactifs en temps réel, axée sur  
👉 **l’apprentissage par le jeu**,  
👉 **la compétition saine**,  
👉 **la collaboration**,  
avec des performances supérieures aux plateformes classiques de type Kahoot!.

---

## 🚀 Objectif du projet

Quizora vise à offrir une expérience de quiz :
- plus **performante**
- plus **flexible** (plusieurs modes de jeu)
- plus **équitable** (moins basé sur la vitesse brute)
- capable de gérer **50 à 60 joueurs simultanément**

Le projet s’inscrit dans un cadre **éducatif**, mais reste extensible à la formation professionnelle ou aux événements.

---

## 🧠 Concept clé

- Les **quiz** sont des contenus statiques
- Les **sessions de jeu** sont dynamiques et en temps réel
- Les scores, streaks et classements sont gérés **en mémoire (Redis)** pendant la partie
- Les résultats finaux sont persistés en **PostgreSQL**

---

## 🎯 Fonctionnalités principales

### 👥 Utilisateurs
- Authentification sécurisée (JWT)
- Rôles :
  - Administrateur
  - Enseignant / Créateur de quiz
  - Apprenant / Joueur

---

### 📝 Gestion des quiz
- Création de quiz
- Gestion des questions et réponses
- Configuration du niveau de difficulté
- Réutilisation des quiz dans plusieurs sessions

---

### 🎮 Modes de jeu
- **Mode Sprint** : rapide, chronométré (inspiration Kahoot)
- **Mode Stratège** : temps illimité, score basé sur la précision
- **Mode Équipe** : score collectif
- **Mode Duel** : 1 contre 1 avec adaptation du niveau
- **Mode Apprentissage** : sans classement, avec feedback pédagogique

---

### ⚡ Temps réel
- Sessions multijoueurs
- Questions synchronisées
- Classement en direct
- Calcul de score et streak pendant la partie

---

## 🏗️ Architecture technique

### Frontend
- React (Vite)
- TypeScript
- React Router
- WebSocket (STOMP)
- Animations (Framer Motion)

---

### Backend
- Spring Boot
- Spring Security + JWT
- Spring Data JPA
- WebSocket (STOMP)
- API REST

---

### Bases de données
| Usage | Technologie |
|-----|------------|
| Données métier (quiz, utilisateurs, historique) | PostgreSQL |
| Données temps réel (scores, sessions live) | Redis |

---

## 🔄 Flux de données

1. Le créateur lance une session de jeu
2. Les joueurs rejoignent via un code
3. Les actions en temps réel sont stockées dans Redis
4. À la fin de la session :
   - les résultats sont enregistrés en PostgreSQL
   - les données Redis sont supprimées ou expirées

---

## 📊 Modélisation
- Diagramme de cas d’utilisation
- Diagramme de classes UML
- Association porteuse `Participation`
- Séparation claire entre :
  - données persistantes
  - états temporaires

---

## 🧪 Tests
- Tests unitaires (JUnit)
- Tests de charge légère (sessions multi-joueurs)
- Vérification de la cohérence temps réel

---

## 🚀 Déploiement (prévu)
- Docker
- Nginx
- PostgreSQL
- Redis
- Serveur VPS / Cloud

---

## 📅 Roadmap simplifiée

1. Backend (API REST)
2. Authentification & rôles
3. Frontend de base
4. Temps réel (WebSocket + Redis)
5. UX & animations
6. Tests et optimisation
7. Déploiement

---

## 👨‍💻 Auteur

**Steven Amani**  
Étudiant en Systèmes Informatiques et Génie Logiciel  
ESATIC – Côte d’Ivoire

---

## 📜 Licence
Projet académique – utilisation éducative.