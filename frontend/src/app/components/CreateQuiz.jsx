import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Save, Settings } from "lucide-react";
export const CreateQuiz = () => {
  const navigate = useNavigate();
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: "1",
      question: "",
      type: "multiple",
      answers: ["", "", "", ""],
      correctAnswers: [0],
      timeLimit: 30,
    },
  ]);
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("FACILE");
  const addQuestion = () => {
    const newQuestion = {
      id: Date.now().toString(),
      question: "",
      type: "multiple",
      answers: ["", "", "", ""],
      correctAnswers: [0],
      timeLimit: 30,
    };
    setQuestions([...questions, newQuestion]);
  };
  const removeQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };
  const updateQuestion = (id, field, value) => {
    setQuestions(
      questions.map((q) => {
        if (q.id !== id) return q;
        // When changing the question type, adjust answers and correctAnswers accordingly
        if (field === "type") {
          if (value === "truefalse") {
            return {
              ...q,
              type: value,
              answers: ["VRAI", "FAUX"],
              correctAnswers: [0],
            };
          }
          // switching to a non-truefalse type: ensure we have 4 empty answers
          return {
            ...q,
            type: value,
            answers: ["", "", "", ""],
            correctAnswers: [0],
          };
        }
        return {
          ...q,
          [field]: value,
        };
      }),
    );
  };
  const updateAnswer = (questionId, answerIndex, value) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const newAnswers = [...q.answers];
          newAnswers[answerIndex] = value;
          return {
            ...q,
            answers: newAnswers,
          };
        }
        return q;
      }),
    );
  };
  const handleSaveQuiz = async () => {
    try {
    const mapType = (t) => {
      if (t === "multiple") return "QCM";
      if (t === "truefalse") return "BOOL";
      if (t === "multiselect") return "MULTI";
      return t;
    };

    const quizPayload = {
      titre: quizTitle,
      description: description,
      niveau: level,
      questions: questions.map((q) => ({
        enonce: q.question,
        typeQuestion: mapType(q.type),
        tempsLimite: q.timeLimit,
        reponses: q.answers.map((answer, index) => ({
          contenu: answer,
          correcte: q.correctAnswers.includes(index),
        })),
      })),
    };

    const response = await fetch("http://localhost:8080/api/quiz/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quizPayload),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la sauvegarde");
    }

    alert("Quiz enregistré avec succès !");
    navigate("/dashboard");
  } catch (error) {
    console.error(error);
    alert("Une erreur est survenue");
  }
    
   
  };
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <motion.button
          whileHover={{
            x: -4,
          }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour
        </motion.button>
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Créer un quiz
          </h1>
          <p className="text-muted-foreground">
            Créez votre quiz personnalisé pour vos apprenants
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">
              Paramètres du quiz
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3">
              <label className="block text-sm text-muted-foreground mb-2">
                Titre du quiz
              </label>
              <input
                type="text"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                placeholder="Ex: Histoire de France - Niveau 1"
                className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-muted-foreground mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Décrivez le quiz, ses objectifs ou consignes..."
                rows={3}
                className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Niveau
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="FACILE">FACILE</option>
                <option value="MOYEN">MOYEN</option>
                <option value="DIFFICILE">DIFFICILE</option>
                <option value="EXPERT">EXPERT</option>
              </select>
            </div>
          </div>
        </motion.div>
        <div className="space-y-4">
          {questions.map((question, index) => (
            /*#__PURE__*/ <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="bg-card border border-border rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">
                  Question {index + 1}
                </h3>
                {questions.length > 1 && (
                  /*#__PURE__*/ <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={() => removeQuestion(question.id)}
                    className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Type de question
                  </label>
                  <select
                    value={question.type}
                    onChange={(e) =>
                      updateQuestion(question.id, "type", e.target.value)
                    }
                    className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="multiple">QCM (choix unique)</option>
                    <option value="truefalse">Vrai / Faux</option>
                    <option value="multiselect">Choix multiples</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Temps limite (secondes)
                  </label>
                  <input
                    type="number"
                    min={5}
                    value={question.timeLimit}
                    onChange={(e) =>
                      updateQuestion(
                        question.id,
                        "timeLimit",
                        Number(e.target.value) || 0,
                      )
                    }
                    className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-muted-foreground mb-2">
                  Question
                </label>
                <textarea
                  value={question.question}
                  onChange={(e) =>
                    updateQuestion(question.id, "question", e.target.value)
                  }
                  placeholder="Entrez votre question..."
                  rows={2}
                  className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              
              <div className="space-y-3">
                <label className="block text-sm text-muted-foreground">
                  Réponses possibles
                </label>
                {question.type === "truefalse" ? (
                  ["VRAI", "FAUX"].map((label, idx) => (
                    /*#__PURE__*/ <div className="flex items-center gap-3" key={idx}>
                      <input
                        type="radio"
                        name={`correct-${question.id}`}
                        checked={question.correctAnswers.includes(idx)}
                        onChange={() =>
                          updateQuestion(question.id, "correctAnswers", [idx])
                        }
                        className="w-5 h-5 text-primary focus:ring-primary"
                      />
                      <div className="flex-1 px-4 py-2 text-foreground">
                        {label}
                      </div>
                    </div>
                  ))
                ) : (
                  question.answers.map((answer, answerIndex) => (
                    /*#__PURE__*/ <div className="flex items-center gap-3" key={answerIndex}>
                      <input
                        type="radio"
                        name={`correct-${question.id}`}
                        checked={question.correctAnswers.includes(answerIndex)}
                        onChange={() =>
                          updateQuestion(question.id, "correctAnswers", [
                            answerIndex,
                          ])
                        }
                        className="w-5 h-5 text-primary focus:ring-primary"
                      />
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) =>
                          updateAnswer(question.id, answerIndex, e.target.value)
                        }
                        placeholder={`Réponse ${answerIndex + 1}`}
                        className="flex-1 bg-input-background border border-border rounded-xl px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          ))}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={addQuestion}
            className="w-full border-2 border-dashed border-border hover:border-primary/50 rounded-2xl py-6 text-muted-foreground hover:text-primary transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Ajouter une question
          </motion.button>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-8 flex gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={handleSaveQuiz}
            className="flex-1 bg-primary text-primary-foreground py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <Save className="w-5 h-5" />
            Sauvegarder le quiz
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => navigate("/")}
            className="px-8 bg-card border border-border text-foreground py-4 rounded-xl font-medium text-lg hover:border-primary/50 transition-all"
          >
            Annuler
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
