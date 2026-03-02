import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Trophy,
  Target,
  Zap,
  TrendingUp,
  Home,
  RotateCcw,
  Eye,
} from "lucide-react";
export const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score = 200, totalQuestions = 3 } = location.state || {};
  const accuracy = Math.round((score / (totalQuestions * 100)) * 100);
  const averageTime = 15;
  const getPerformanceMessage = () => {
    if (accuracy >= 90)
      return {
        text: "Excellent !",
        color: "text-primary",
      };
    if (accuracy >= 70)
      return {
        text: "Très bien !",
        color: "text-accent",
      };
    if (accuracy >= 50)
      return {
        text: "Bien joué !",
        color: "text-success",
      };
    return {
      text: "Continue à t'entraîner !",
      color: "text-muted-foreground",
    };
  };
  const performance = getPerformanceMessage();
  const stats = [
    {
      icon: Trophy,
      label: "Score total",
      value: score,
      suffix: "pts",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
    },
    {
      icon: Target,
      label: "Précision",
      value: accuracy,
      suffix: "%",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
    },
    {
      icon: Zap,
      label: "Temps moyen",
      value: averageTime,
      suffix: "s",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
    },
  ];
  const insights = [
    {
      icon: TrendingUp,
      text: "Points forts",
      detail: "Excellente rapidité de réponse",
      color: "text-success",
    },
    {
      icon: Target,
      text: "À améliorer",
      detail: "Prenez le temps de bien lire les questions",
      color: "text-accent",
    },
  ];
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-primary/30"
          >
            <Trophy className="w-12 h-12 text-[#0a0e1a]" strokeWidth={2.5} />
          </motion.div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Résultats</h1>
          <p className={`text-2xl font-bold ${performance.color}`}>
            {performance.text}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
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
                delay: 0.3 + index * 0.1,
              }}
              className={`bg-card border ${stat.borderColor} ${stat.bgColor} rounded-xl p-6 text-center shadow-lg`}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
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
            delay: 0.6,
          }}
          className="bg-card border border-border rounded-2xl p-6 mb-8 shadow-xl"
        >
          <h3 className="text-lg font-bold text-foreground mb-4">
            Analyse de performance
          </h3>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              /*#__PURE__*/ <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-lg bg-input-background flex items-center justify-center flex-shrink-0`}
                >
                  <insight.icon className={`w-5 h-5 ${insight.color}`} />
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {insight.text}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {insight.detail}
                  </div>
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
            delay: 0.8,
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => navigate("/gameplay")}
            className="flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-foreground py-3 rounded-xl font-medium transition-all"
          >
            <Eye className="w-5 h-5" />
            Revoir les réponses
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => navigate("/gameplay")}
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Rejouer
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 bg-card border border-border hover:border-accent/50 text-foreground py-3 rounded-xl font-medium transition-all"
          >
            <Home className="w-5 h-5" />
            Accueil
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
