import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  X,
  BookOpen,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
const LEARNING_QUESTIONS = [
  {
    id: 1,
    question: "Quelle est la capitale de la France ?",
    answers: ["Londres", "Paris", "Berlin", "Madrid"],
    correctAnswer: 1,
    explanation:
      "Paris est la capitale et la plus grande ville de France. C'est le centre politique, économique et culturel du pays depuis des siècles.",
    tip: "Les capitales sont souvent les plus grandes villes d'un pays, mais pas toujours !",
    resource: "https://fr.wikipedia.org/wiki/Paris",
  },
  {
    id: 2,
    question: "Combien de continents y a-t-il sur Terre ?",
    answers: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation:
      "Il y a 7 continents : Afrique, Amérique du Nord, Amérique du Sud, Antarctique, Asie, Europe et Océanie. Certains modèles en comptent 6 en combinant l'Europe et l'Asie en Eurasie.",
    tip: "La division des continents peut varier selon les modèles géographiques utilisés.",
  },
  {
    id: 3,
    question: "Quel est le plus grand océan du monde ?",
    answers: ["Atlantique", "Indien", "Arctique", "Pacifique"],
    correctAnswer: 3,
    explanation:
      "L'océan Pacifique est le plus grand océan du monde, couvrant environ 165 millions de km², soit plus de 30% de la surface de la Terre.",
    tip: "Le Pacifique est si grand qu'il pourrait contenir tous les continents !",
  },
];
export const LearningMode = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const currentQuestion = LEARNING_QUESTIONS[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const handleAnswerSelect = (index) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < LEARNING_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      navigate("/");
    }
  };
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-4xl mx-auto mb-8">
        <motion.button
          whileHover={{
            x: -4,
          }}
          onClick={() => navigate("/select-mode")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour
        </motion.button>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-success" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Mode Apprentissage
            </h1>
            <p className="text-muted-foreground text-sm">
              Apprenez à votre rythme, sans pression
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>
            Question {currentQuestionIndex + 1} / {LEARNING_QUESTIONS.length}
          </span>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-success to-accent"
              initial={{
                width: 0,
              }}
              animate={{
                width: `${((currentQuestionIndex + 1) / LEARNING_QUESTIONS.length) * 100}%`,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 mb-6 shadow-xl">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                {currentQuestion.question}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.answers.map((answer, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrectAnswer =
                    index === currentQuestion.correctAnswer;
                  const showCorrect = showFeedback && isCorrectAnswer;
                  const showIncorrect =
                    showFeedback && isSelected && !isCorrect;
                  return (
                    /*#__PURE__*/ <motion.button
                      whileHover={
                        !showFeedback
                          ? {
                              scale: 1.02,
                            }
                          : {}
                      }
                      whileTap={
                        !showFeedback
                          ? {
                              scale: 0.98,
                            }
                          : {}
                      }
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showFeedback}
                      className={`relative p-6 rounded-xl border-2 transition-all text-left font-medium ${showCorrect ? "bg-success/10 border-success shadow-lg shadow-success/20" : showIncorrect ? "bg-destructive/10 border-destructive" : isSelected ? "bg-primary/10 border-primary" : "bg-input-background border-border hover:border-accent/50"}`}
                    >
                      <span className="text-foreground">{answer}</span>
                      {showCorrect && (
                        /*#__PURE__*/ <motion.div
                          initial={{
                            scale: 0,
                          }}
                          animate={{
                            scale: 1,
                          }}
                          className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 bg-success rounded-full flex items-center justify-center"
                        >
                          <Check
                            className="w-5 h-5 text-white"
                            strokeWidth={3}
                          />
                        </motion.div>
                      )}
                      {showIncorrect && (
                        /*#__PURE__*/ <motion.div
                          initial={{
                            scale: 0,
                          }}
                          animate={{
                            scale: 1,
                          }}
                          className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 bg-destructive rounded-full flex items-center justify-center"
                        >
                          <X className="w-5 h-5 text-white" strokeWidth={3} />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
            {showFeedback && (
              /*#__PURE__*/ <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="space-y-4"
              >
                <div
                  className={`bg-card border-2 ${isCorrect ? "border-success" : "border-accent"} rounded-2xl p-6 shadow-xl`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg ${isCorrect ? "bg-success" : "bg-accent"} flex items-center justify-center flex-shrink-0`}
                    >
                      <BookOpen className="w-5 h-5 text-[#0a0e1a]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2">
                        {isCorrect ? "✓ Excellente réponse !" : "Explication"}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-primary mb-1">
                        💡 Astuce
                      </h4>
                      <p className="text-sm text-foreground">
                        {currentQuestion.tip}
                      </p>
                    </div>
                  </div>
                </div>
                {currentQuestion.resource && (
                  /*#__PURE__*/ <div className="bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-colors">
                    <a
                      href={currentQuestion.resource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <ExternalLink className="w-5 h-5 text-accent" />
                        <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                          En savoir plus sur ce sujet
                        </span>
                      </div>
                      <span className="text-accent">→</span>
                    </a>
                  </div>
                )}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={handleNextQuestion}
                  className="w-full bg-success text-white py-4 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-success/30 transition-all"
                >
                  {currentQuestionIndex < LEARNING_QUESTIONS.length - 1
                    ? "Question suivante"
                    : "Terminer"}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
