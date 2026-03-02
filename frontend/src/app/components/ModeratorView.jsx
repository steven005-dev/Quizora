import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  Pause,
  SkipForward,
  Users,
  TrendingUp,
  AlertCircle,
  Crown,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
const CURRENT_QUESTION = {
  id: 1,
  text: "Quelle est la capitale de la France ?",
  answers: ["Londres", "Paris", "Berlin", "Madrid"],
  correctAnswer: 1,
};
const MOCK_STATS = {
  totalResponses: 12,
  correctResponses: 10,
  incorrectResponses: 2,
  averageTime: 8.5,
};
export const ModeratorView = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [totalQuestions] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [stats, setStats] = useState(MOCK_STATS);
  useEffect(() => {
    if (!isPaused && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isPaused]);
  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
      setStats({
        totalResponses: 0,
        correctResponses: 0,
        incorrectResponses: 0,
        averageTime: 0,
      });
    } else {
      navigate("/results");
    }
  };
  const togglePause = () => {
    setIsPaused(!isPaused);
  };
  const correctPercentage =
    stats.totalResponses > 0
      ? Math.round((stats.correctResponses / stats.totalResponses) * 100)
      : 0;
  const responseRate = Math.round((stats.totalResponses / 15) * 100);
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background">
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Interface Modérateur
                </h1>
                <p className="text-sm text-muted-foreground">
                  Vous contrôlez cette session
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-bold text-primary">15 joueurs actifs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Progression
                </span>
                <span className="text-sm font-bold text-primary">
                  Question {currentQuestion} / {totalQuestions}
                </span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${(currentQuestion / totalQuestions) * 100}%`,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />
              </div>
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
              transition={{
                delay: 0.1,
              }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">
                  Question actuelle
                </h2>
                <div className="flex items-center gap-2">
                  <Clock
                    className={`w-5 h-5 ${timeLeft <= 10 ? "text-destructive" : "text-primary"}`}
                  />
                  <span
                    className={`text-2xl font-bold ${timeLeft <= 10 ? "text-destructive" : "text-primary"}`}
                  >
                    {timeLeft}s
                  </span>
                </div>
              </div>
              <div className="bg-muted rounded-xl p-6 mb-6">
                <p className="text-xl font-medium text-foreground text-center">
                  {CURRENT_QUESTION.text}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {CURRENT_QUESTION.answers.map((answer, index) => (
                  /*#__PURE__*/ <div
                    className={`p-4 rounded-xl border-2 ${index === CURRENT_QUESTION.correctAnswer ? "border-success bg-success/5" : "border-border bg-muted"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-medium">
                        {answer}
                      </span>
                      {index === CURRENT_QUESTION.correctAnswer && (
                        /*#__PURE__*/ <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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
              transition={{
                delay: 0.2,
              }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={togglePause}
                className="flex-1 bg-secondary text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-secondary/30 transition-all"
              >
                {isPaused ? (
                  /*#__PURE__*/ <_Fragment>
                    <Play className="w-5 h-5" />
                    Reprendre
                  </_Fragment>
                ) : (
                  /*#__PURE__*/ <_Fragment>
                    <Pause className="w-5 h-5" />
                    Mettre en pause
                  </_Fragment>
                )}
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={handleNextQuestion}
                className="flex-1 bg-primary text-primary-foreground py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <SkipForward className="w-5 h-5" />
                {currentQuestion < totalQuestions
                  ? "Question suivante"
                  : "Terminer"}
              </motion.button>
            </motion.div>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Statistiques en direct
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      Réponses reçues
                    </span>
                    <span className="font-bold text-foreground">
                      {stats.totalResponses}/15
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{
                        width: `${responseRate}%`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-success/10 rounded-xl border border-success/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Correct
                      </div>
                      <div className="font-bold text-foreground">
                        {stats.correctResponses}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-success">
                    {correctPercentage}%
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-xl border border-destructive/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-destructive rounded-xl flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Incorrect
                      </div>
                      <div className="font-bold text-foreground">
                        {stats.incorrectResponses}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-destructive">
                    {100 - correctPercentage}%
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Temps moyen
                    </span>
                  </div>
                  <span className="font-bold text-foreground">
                    {stats.averageTime}s
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-secondary" />
                Alertes
              </h3>
              <div className="space-y-3">
                {responseRate < 50 && (
                  /*#__PURE__*/ <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-3">
                    <p className="text-sm text-foreground">
                      ⚠️ Peu de réponses reçues ({responseRate}%)
                    </p>
                  </div>
                )}
                {timeLeft <= 5 && (
                  /*#__PURE__*/ <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-3">
                    <p className="text-sm text-foreground">
                      ⏰ Temps presque écoulé !
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
