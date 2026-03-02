import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Play,
  Settings as SettingsIcon,
  Zap,
  Brain,
  Users,
  Swords,
  BookOpen,
} from "lucide-react";
const GAME_MODES = [
  {
    id: "sprint",
    icon: Zap,
    name: "Sprint",
    desc: "Rapide et chronométré",
    color: "primary",
  },
  {
    id: "strategist",
    icon: Brain,
    name: "Stratège",
    desc: "Temps illimité, précision",
    color: "secondary",
  },
  {
    id: "team",
    icon: Users,
    name: "Équipe",
    desc: "Collaboration",
    color: "success",
  },
  {
    id: "duel",
    icon: Swords,
    name: "Duel",
    desc: "1v1 adaptatif",
    color: "destructive",
  },
  {
    id: "learning",
    icon: BookOpen,
    name: "Apprentissage",
    desc: "Sans classement",
    color: "accent",
  },
];
const MOCK_QUIZZES = [
  {
    id: 1,
    title: "Histoire de France",
    category: "Histoire",
    questions: 20,
    difficulty: "Moyen",
  },
  {
    id: 2,
    title: "Mathématiques - Niveau 1",
    category: "Mathématiques",
    questions: 15,
    difficulty: "Facile",
  },
  {
    id: 3,
    title: "Géographie mondiale",
    category: "Géographie",
    questions: 25,
    difficulty: "Difficile",
  },
];
export const CreateSession = () => {
  const navigate = useNavigate();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedMode, setSelectedMode] = useState("sprint");
  const [questionDuration, setQuestionDuration] = useState(30);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [teamMode, setTeamMode] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState(false);
  const handleCreateSession = () => {
    if (selectedQuiz) {
      const sessionCode = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();
      navigate("/lobby", {
        state: {
          sessionCode,
          isModerator: true,
        },
      });
    }
  };
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <motion.button
          whileHover={{
            x: -4,
          }}
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour au dashboard
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
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Créer une partie
          </h1>
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-xl px-4 py-3 inline-flex">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              Vous serez le MODÉRATEUR de cette session
            </span>
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
          className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <SettingsIcon className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">
              1. Sélectionnez un quiz
            </h2>
          </div>
          <div className="space-y-3">
            {MOCK_QUIZZES.map((quiz) => (
              /*#__PURE__*/ <motion.div
                whileHover={{
                  scale: 1.01,
                }}
                onClick={() => setSelectedQuiz(quiz.id)}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedQuiz === quiz.id ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/50"}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground">{quiz.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {quiz.category} • {quiz.questions} questions •{" "}
                      {quiz.difficulty}
                    </p>
                  </div>
                  {selectedQuiz === quiz.id && (
                    /*#__PURE__*/ <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              </motion.div>
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
          className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">
            2. Mode de jeu
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {GAME_MODES.map((mode) => (
              /*#__PURE__*/ <motion.button
                whileHover={{
                  y: -2,
                }}
                onClick={() => setSelectedMode(mode.id)}
                className={`p-4 border-2 rounded-xl transition-all ${selectedMode === mode.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
              >
                <mode.icon
                  className={`w-8 h-8 mx-auto mb-2 ${selectedMode === mode.id ? "text-primary" : "text-muted-foreground"}`}
                />
                <div className="font-bold text-sm text-foreground">
                  {mode.name}
                </div>
                <div className="text-xs text-muted-foreground">{mode.desc}</div>
              </motion.button>
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
            delay: 0.3,
          }}
          className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">
            3. Configuration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Durée par question (secondes)
              </label>
              <input
                type="number"
                value={questionDuration}
                onChange={(e) => setQuestionDuration(Number(e.target.value))}
                min="10"
                max="120"
                disabled={
                  selectedMode === "strategist" || selectedMode === "learning"
                }
                className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
              />
              {(selectedMode === "strategist" ||
                selectedMode === "learning") && (
                /*#__PURE__*/ <p className="text-xs text-muted-foreground mt-1">
                  Temps illimité pour ce mode
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nombre de questions
              </label>
              <input
                type="number"
                value={numberOfQuestions}
                onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
                min="5"
                max="50"
                className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
              <div>
                <div className="font-medium text-foreground">Mode équipe</div>
                <div className="text-sm text-muted-foreground">
                  Activer le jeu en équipe
                </div>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  checked={teamMode}
                  onChange={(e) => setTeamMode(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-border rounded-full peer peer-checked:bg-primary transition-all cursor-pointer after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6" />
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
              <div>
                <div className="font-medium text-foreground">
                  Questions aléatoires
                </div>
                <div className="text-sm text-muted-foreground">
                  Mélanger l'ordre des questions
                </div>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  checked={randomQuestions}
                  onChange={(e) => setRandomQuestions(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-border rounded-full peer peer-checked:bg-primary transition-all cursor-pointer after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-6" />
              </label>
            </div>
          </div>
        </motion.div>
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.99,
          }}
          disabled={!selectedQuiz}
          onClick={handleCreateSession}
          className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          <Play className="w-6 h-6" />
          Lancer la partie
        </motion.button>
      </div>
    </div>
  );
};
