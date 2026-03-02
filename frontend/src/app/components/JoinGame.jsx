import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn, User, Hash } from "lucide-react";
const AVATARS = [
  "🦊",
  "🐼",
  "🦁",
  "🐯",
  "🦉",
  "🐺",
  "🦅",
  "🐸",
  "🦋",
  "🐙",
  "🦑",
  "🐬",
  "🦈",
  "🐳",
  "🦕",
  "🦖",
];
export const JoinGame = () => {
  const navigate = useNavigate();
  const [gameCode, setGameCode] = useState("");
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);
  const handleJoin = (e) => {
    e.preventDefault();
    if (gameCode && username) {
      navigate("/select-mode", {
        state: {
          gameCode,
          username,
          avatar: selectedAvatar,
        },
      });
    }
  };
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background flex flex-col px-4 py-8">
      <motion.button
        whileHover={{
          x: -4,
        }}
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 self-start"
      >
        <ArrowLeft className="w-5 h-5" />
        Retour
      </motion.button>
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="w-full max-w-md"
        >
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
              Rejoindre une partie
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Entrez le code de la partie et personnalisez votre profil
            </p>
            <form onSubmit={handleJoin} className="space-y-6">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Code de la partie
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={gameCode}
                    onChange={(e) => setGameCode(e.target.value.toUpperCase())}
                    placeholder="ABC123"
                    maxLength={6}
                    className="w-full bg-input-background border border-border rounded-xl pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all uppercase tracking-widest text-center text-xl font-bold"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Pseudo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Votre nom"
                    maxLength={20}
                    className="w-full bg-input-background border border-border rounded-xl pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-3">
                  Choisissez votre avatar
                </label>
                <div className="grid grid-cols-8 gap-2">
                  {AVATARS.map((avatar) => (
                    /*#__PURE__*/ <motion.button
                      type="button"
                      whileHover={{
                        scale: 1.1,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`aspect-square rounded-xl text-2xl flex items-center justify-center transition-all ${selectedAvatar === avatar ? "bg-primary shadow-lg shadow-primary/30 scale-110" : "bg-input-background hover:bg-muted border border-border"}`}
                    >
                      {avatar}
                    </motion.button>
                  ))}
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                disabled={!gameCode || !username}
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <LogIn className="w-5 h-5" />
                Rejoindre
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
