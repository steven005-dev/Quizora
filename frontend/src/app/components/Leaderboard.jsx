import { motion } from "motion/react";
import { Trophy, TrendingUp, Target, Zap } from "lucide-react";
const MOCK_PLAYERS = [
  {
    rank: 1,
    name: "Sophie",
    avatar: "🦊",
    score: 950,
    accuracy: 95,
    progress: 15,
  },
  {
    rank: 2,
    name: "Marc",
    avatar: "🐼",
    score: 920,
    accuracy: 92,
    progress: 12,
  },
  {
    rank: 3,
    name: "Julie",
    avatar: "🦁",
    score: 890,
    accuracy: 89,
    progress: 8,
  },
  {
    rank: 4,
    name: "Alex",
    avatar: "🐯",
    score: 850,
    accuracy: 85,
    progress: 5,
  },
  {
    rank: 5,
    name: "Emma",
    avatar: "🦉",
    score: 820,
    accuracy: 82,
    progress: 3,
  },
  {
    rank: 6,
    name: "Thomas",
    avatar: "🐺",
    score: 780,
    accuracy: 78,
    progress: 2,
  },
  {
    rank: 7,
    name: "Clara",
    avatar: "🦅",
    score: 750,
    accuracy: 75,
    progress: -1,
  },
  {
    rank: 8,
    name: "Lucas",
    avatar: "🐸",
    score: 720,
    accuracy: 72,
    progress: -2,
  },
];
export const Leaderboard = () => {
  const getRankColor = (rank) => {
    if (rank === 1) return "from-primary to-accent";
    if (rank === 2) return "from-gray-400 to-gray-300";
    if (rank === 3) return "from-amber-600 to-amber-500";
    return "from-muted to-card";
  };
  const getProgressColor = (progress) => {
    if (progress > 0) return "text-success";
    if (progress < 0) return "text-destructive";
    return "text-muted-foreground";
  };
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-4xl mx-auto">
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">
              Classement en temps réel
            </h1>
          </div>
          <p className="text-muted-foreground">
            Les positions sont mises à jour en direct
          </p>
        </motion.div>
        <div className="grid grid-cols-3 gap-4 mb-8">
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
            className="bg-card border border-border rounded-xl p-4 text-center"
          >
            <Target className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">85%</div>
            <div className="text-xs text-muted-foreground">
              Précision moyenne
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
            className="bg-card border border-border rounded-xl p-4 text-center"
          >
            <Zap className="w-6 h-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">12s</div>
            <div className="text-xs text-muted-foreground">Temps moyen</div>
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
            className="bg-card border border-border rounded-xl p-4 text-center"
          >
            <TrendingUp className="w-6 h-6 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">52</div>
            <div className="text-xs text-muted-foreground">Joueurs actifs</div>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="bg-card border border-border rounded-2xl p-6 shadow-xl"
        >
          <div className="space-y-3">
            {MOCK_PLAYERS.map((player, index) => (
              /*#__PURE__*/ <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5 + index * 0.05,
                }}
                className="relative"
              >
                <div
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${player.rank <= 3 ? "border-primary/30 bg-primary/5" : "border-border bg-input-background"}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getRankColor(player.rank)} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <span
                      className={`font-bold ${player.rank <= 3 ? "text-[#0a0e1a]" : "text-foreground"}`}
                    >
                      {player.rank}
                    </span>
                  </div>
                  <div className="text-3xl">{player.avatar}</div>
                  <div className="flex-1">
                    <div className="font-bold text-foreground">
                      {player.name}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        {player.accuracy}%
                      </span>
                      {player.progress !== 0 && (
                        /*#__PURE__*/ <span
                          className={`flex items-center gap-1 ${getProgressColor(player.progress)}`}
                        >
                          <TrendingUp className="w-3 h-3" />
                          {player.progress > 0 ? "+" : ""}
                          {player.progress}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {player.score}
                    </div>
                    <div className="text-xs text-muted-foreground">points</div>
                  </div>
                </div>
                {player.rank === 1 &&
                  player.accuracy ===
                    Math.max(...MOCK_PLAYERS.map((p) => p.accuracy)) && (
                    /*#__PURE__*/ <div className="absolute -top-2 -right-2 bg-accent text-[#0a0e1a] text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      🎯 Best Accuracy
                    </div>
                  )}
                {player.progress ===
                  Math.max(...MOCK_PLAYERS.map((p) => p.progress)) &&
                  player.progress > 0 && (
                    /*#__PURE__*/ <div className="absolute -top-2 -right-2 bg-success text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      📈 Most Improved
                    </div>
                  )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          💡 Les classements récompensent la précision autant que la rapidité
        </motion.div>
      </div>
    </div>
  );
};
