import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap, Brain, Users, Swords, BookOpen } from "lucide-react";
const GAME_MODES = [
  {
    id: "sprint",
    icon: Zap,
    title: "Mode Sprint",
    description:
      "Rapide et chronométré. Testez vos réflexes et votre rapidité.",
    color: "from-primary to-accent",
    gradient: "bg-gradient-to-br from-primary/10 to-accent/10",
    borderColor: "border-primary/50",
  },
  {
    id: "strategist",
    icon: Brain,
    title: "Mode Stratège",
    description: "Temps illimité. La précision compte plus que la vitesse.",
    color: "from-accent to-primary",
    gradient: "bg-gradient-to-br from-accent/10 to-primary/10",
    borderColor: "border-accent/50",
  },
  {
    id: "team",
    icon: Users,
    title: "Mode Équipe",
    description: "Collaboration et stratégie collective pour gagner ensemble.",
    color: "from-secondary to-accent",
    gradient: "bg-gradient-to-br from-secondary/10 to-accent/10",
    borderColor: "border-secondary/50",
  },
  {
    id: "duel",
    icon: Swords,
    title: "Mode Duel",
    description: "Affrontement 1v1 adaptatif selon votre niveau.",
    color: "from-destructive to-primary",
    gradient: "bg-gradient-to-br from-destructive/10 to-primary/10",
    borderColor: "border-destructive/50",
  },
  {
    id: "learning",
    icon: BookOpen,
    title: "Mode Apprentissage",
    description:
      "Sans classement. Apprenez à votre rythme avec des explications détaillées.",
    color: "from-success to-accent",
    gradient: "bg-gradient-to-br from-success/10 to-accent/10",
    borderColor: "border-success/50",
  },
];
export const SelectGameMode = () => {
  const navigate = useNavigate();
  const handleSelectMode = (modeId) => {
    if (modeId === "learning") {
      navigate("/learning-mode");
    } else {
      navigate("/gameplay");
    }
  };
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-6xl mx-auto mb-8">
        <motion.button
          whileHover={{
            x: -4,
          }}
          onClick={() => navigate("/join")}
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
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Choisissez votre mode de jeu
          </h1>
          <p className="text-muted-foreground text-lg">
            Chaque mode offre une expérience unique adaptée à vos objectifs
          </p>
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GAME_MODES.map((mode, index) => (
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
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.2,
              },
            }}
            onClick={() => handleSelectMode(mode.id)}
            className={`group cursor-pointer bg-card border ${mode.borderColor} rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all ${mode.gradient}`}
          >
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
            >
              <mode.icon className="w-8 h-8 text-[#0a0e1a]" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {mode.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {mode.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-medium">Sélectionner</span>
              <motion.div
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                →
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
        }}
        className="max-w-4xl mx-auto mt-12 bg-card/50 border border-border rounded-xl p-6 text-center"
      >
        <p className="text-muted-foreground">
          💡 <span className="font-medium">Astuce :</span> Commencez par le Mode
          Apprentissage pour vous familiariser avec la plateforme sans pression
          de classement.
        </p>
      </motion.div>
    </div>
  );
};
