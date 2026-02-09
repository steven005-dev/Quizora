-- =========================
-- TABLE UTILISATEURS
-- =========================
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(30) NOT NULL
);

-- =========================
-- HERITAGE USER (JOINED)
-- =========================
CREATE TABLE enseignant (
    id BIGINT PRIMARY KEY,
    CONSTRAINT fk_enseignant_user
        FOREIGN KEY (id) REFERENCES users(id)
);

CREATE TABLE apprenant (
    id BIGINT PRIMARY KEY,
    CONSTRAINT fk_apprenant_user
        FOREIGN KEY (id) REFERENCES users(id)
);

-- =========================
-- QUIZ
-- =========================
CREATE TABLE quiz (
    id BIGSERIAL PRIMARY KEY,
    titre VARCHAR(150) NOT NULL,
    description TEXT,
    niveau VARCHAR(50),
    enseignant_id BIGINT NOT NULL,
    CONSTRAINT fk_quiz_enseignant
        FOREIGN KEY (enseignant_id) REFERENCES enseignants(id)
);

-- =========================
-- QUESTIONS
-- =========================
CREATE TABLE question (
    id BIGSERIAL PRIMARY KEY,
    enonce TEXT NOT NULL,
    temps_limite INT,
    quiz_id BIGINT NOT NULL,
    CONSTRAINT fk_question_quiz
        FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);

-- =========================
-- REPONSES
-- =========================
CREATE TABLE reponse (
    id BIGSERIAL PRIMARY KEY,
    contenu TEXT NOT NULL,
    correcte BOOLEAN NOT NULL,
    question_id BIGINT NOT NULL,
    CONSTRAINT fk_reponse_question
        FOREIGN KEY (question_id) REFERENCES questions(id)
);

-- =========================
-- SESSIONS DE JEU
-- =========================
CREATE TABLE sessionsJeu (
    id BIGSERIAL PRIMARY KEY,
    code_session VARCHAR(20) UNIQUE NOT NULL,
    mode VARCHAR(30) NOT NULL,
    date_debut TIMESTAMP,
    date_fin TIMESTAMP,
    quiz_id BIGINT NOT NULL,
    CONSTRAINT fk_session_quiz
        FOREIGN KEY (quiz_id) REFERENCES quiz(id)
);

-- =========================
-- PARTICIPATIONS
-- =========================
CREATE TABLE participations (
    id BIGSERIAL PRIMARY KEY,
    apprenant_id BIGINT NOT NULL,
    session_jeu_id BIGINT NOT NULL,
    role_session VARCHAR(30) NOT NULL,
    score_final INT DEFAULT 0,
    nombre_bonnes_reponses INT DEFAULT 0,
    streak_max INT DEFAULT 0,
    CONSTRAINT fk_participation_apprenant
        FOREIGN KEY (apprenant_id) REFERENCES apprenants(id),
    CONSTRAINT fk_participation_session
        FOREIGN KEY (session_jeu_id) REFERENCES sessions_jeu(id),
    CONSTRAINT uq_participation UNIQUE (apprenant_id, session_jeu_id)
);