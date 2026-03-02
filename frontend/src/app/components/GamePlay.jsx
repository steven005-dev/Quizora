import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Check, X, Clock } from "lucide-react";
const MOCK_QUESTIONS = [
  {
    id: 1,
    question: "Quelle est la capitale de la France ?",
    answers: ["Londres", "Paris", "Berlin", "Madrid"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Combien de continents y a-t-il sur Terre ?",
    answers: ["5", "6", "7", "8"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Quel est le plus grand océan du monde ?",
    answers: ["Atlantique", "Indien", "Arctique", "Pacifique"],
    correctAnswer: 3,
  },
];
export const GamePlay = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const currentQuestion = MOCK_QUESTIONS[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback) {
      setShowFeedback(true);
    }
  }, [timeLeft, showFeedback]);
  const handleAnswerSelect = (index) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 100);
    }
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < MOCK_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setTimeLeft(30);
    } else {
      navigate("/results", {
        state: {
          score,
          totalQuestions: MOCK_QUESTIONS.length,
        },
      });
    }
  };
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="text-muted-foreground">
              Question {currentQuestionIndex + 1} / {MOCK_QUESTIONS.length}
            </div>
            <div className="text-primary font-bold">Score: {score}</div>
          </div>
          <motion.div
            className="flex items-center gap-2"
            animate={{
              scale: timeLeft <= 10 ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: timeLeft <= 10 ? Infinity : 0,
            }}
          >
            <Clock
              className={`w-5 h-5 ${timeLeft <= 10 ? "text-destructive" : "text-accent"}`}
            />
            <div
              className={`text-xl font-bold ${timeLeft <= 10 ? "text-destructive" : "text-accent"}`}
            >
              {timeLeft}s
            </div>
          </motion.div>
        </div>
        <div className="w-full h-2 bg-muted rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{
              width: 0,
            }}
            animate={{
              width: `${((currentQuestionIndex + 1) / MOCK_QUESTIONS.length) * 100}%`,
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </div>
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
            className="bg-card border border-border rounded-2xl p-8 mb-6 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              {currentQuestion.question}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.answers.map((answer, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === currentQuestion.correctAnswer;
                const showCorrect = showFeedback && isCorrectAnswer;
                const showIncorrect = showFeedback && isSelected && !isCorrect;
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
                    className={`relative p-6 rounded-xl border-2 transition-all text-left font-medium ${showCorrect ? "bg-success/10 border-success shadow-lg shadow-success/20" : showIncorrect ? "bg-destructive/10 border-destructive" : isSelected ? "bg-primary/10 border-primary" : "bg-input-background border-border hover:border-primary/50"}`}
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
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
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
          </motion.div>
        </AnimatePresence>
        {showFeedback && (
          /*#__PURE__*/ <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={handleNextQuestion}
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            {currentQuestionIndex < MOCK_QUESTIONS.length - 1
              ? "Question suivante"
              : "Voir les résultats"}
          </motion.button>
        )}
      </div>
    </div>
  );
};
