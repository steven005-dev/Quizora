import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Copy,
  Users,
  MessageCircle,
  Settings,
  Play,
  Check,
  Crown,
} from "lucide-react";
const MOCK_PLAYERS = [
  {
    id: "1",
    name: "Vous",
    avatar: "🦊",
    isReady: true,
    isModerator: true,
  },
  {
    id: "2",
    name: "Sophie",
    avatar: "🐼",
    isReady: true,
    isModerator: false,
  },
  {
    id: "3",
    name: "Marc",
    avatar: "🦁",
    isReady: false,
    isModerator: false,
  },
  {
    id: "4",
    name: "Julie",
    avatar: "🐯",
    isReady: true,
    isModerator: false,
  },
  {
    id: "5",
    name: "Alex",
    avatar: "🦉",
    isReady: false,
    isModerator: false,
  },
];
export const Lobby = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sessionCode = "ABC123", isModerator = false } = location.state || {};
  const [players, setPlayers] = useState(MOCK_PLAYERS);
  const [copied, setCopied] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const copyCode = () => {
    navigator.clipboard.writeText(sessionCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const startGame = () => {
    if (isModerator) {
      navigate("/moderator-view");
    }
  };
  const readyPlayers = players.filter((p) => p.isReady).length;
  const totalPlayers = players.length;
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
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
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Salle d'attente
          </h1>
          <p className="text-muted-foreground">
            En attente du démarrage de la partie...
          </p>
        </motion.div>
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
              transition={{
                delay: 0.1,
              }}
              className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center shadow-xl"
            >
              <p className="text-white/90 mb-2 font-medium">
                Code de la partie
              </p>
              <div className="text-6xl font-bold text-white tracking-widest mb-4 font-mono">
                {sessionCode}
              </div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={copyCode}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 mx-auto transition-all"
              >
                {copied ? (
                  /*#__PURE__*/ <_Fragment>
                    <Check className="w-5 h-5" />
                    Copié !
                  </_Fragment>
                ) : (
                  /*#__PURE__*/ <_Fragment>
                    <Copy className="w-5 h-5" />
                    Copier le code
                  </_Fragment>
                )}
              </motion.button>
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
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">
                    Joueurs ({totalPlayers}/60)
                  </h2>
                </div>
                <div className="text-sm text-muted-foreground">
                  {readyPlayers} prêts
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                <AnimatePresence>
                  {players.map((player, index) => (
                    /*#__PURE__*/ <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      className={`relative p-4 rounded-xl border-2 transition-all ${player.isReady ? "border-success bg-success/5" : "border-border bg-muted"}`}
                    >
                      {player.isModerator && (
                        /*#__PURE__*/ <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                          <Crown className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className="text-3xl text-center mb-2">
                        {player.avatar}
                      </div>
                      <div className="text-sm font-medium text-foreground text-center truncate">
                        {player.name}
                      </div>
                      {player.isReady && (
                        /*#__PURE__*/ <div className="text-xs text-success text-center mt-1">
                          ✓ Prêt
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
          <div className="space-y-6">
            {isModerator && (
              /*#__PURE__*/ <motion.div
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
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="w-5 h-5 text-secondary" />
                  <h3 className="font-bold text-foreground">
                    Contrôles modérateur
                  </h3>
                </div>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={startGame}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    <Play className="w-5 h-5" />
                    Démarrer la partie
                  </motion.button>
                  <button className="w-full bg-muted text-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 border border-border hover:border-primary/50 transition-all">
                    <Settings className="w-5 h-5" />
                    Paramètres
                  </button>
                </div>
              </motion.div>
            )}
            {!isModerator && (
              /*#__PURE__*/ <motion.div
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
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="w-full bg-success text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-success/20 transition-all"
                >
                  <Check className="w-5 h-5" />
                  Je suis prêt
                </motion.button>
              </motion.div>
            )}
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
              <button
                onClick={() => setShowChat(!showChat)}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-foreground">Chat</h3>
                </div>
                <div className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  3
                </div>
              </button>
              {showChat && (
                /*#__PURE__*/ <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  className="mt-4 pt-4 border-t border-border"
                >
                  <div className="space-y-2 max-h-48 overflow-y-auto mb-3">
                    <div className="text-sm">
                      <span className="font-medium text-foreground">
                        Sophie:
                      </span>
                      <span className="text-muted-foreground ml-2">
                        Prêt à jouer !
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-foreground">Marc:</span>
                      <span className="text-muted-foreground ml-2">
                        Bonne chance à tous 🎉
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-foreground">
                        Julie:
                      </span>
                      <span className="text-muted-foreground ml-2">
                        Let's go!
                      </span>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Envoyer un message..."
                    className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all"
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
