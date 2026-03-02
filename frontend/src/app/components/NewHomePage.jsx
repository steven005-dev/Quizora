import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  Zap,
  Brain,
  Users,
  Swords,
  BookOpen,
  ArrowRight,
  Play,
  Plus,
} from "lucide-react";
const GAME_MODES = [
  {
    icon: Zap,
    title: "Sprint",
    desc: "Rapide et chronométré",
  },
  {
    icon: Brain,
    title: "Stratège",
    desc: "Temps illimité, précision maximale",
  },
  {
    icon: Users,
    title: "Équipe",
    desc: "Collaboration et stratégie",
  },
  {
    icon: Swords,
    title: "Duel",
    desc: "Affrontement 1v1 adaptatif",
  },
  {
    icon: BookOpen,
    title: "Apprentissage",
    desc: "Sans pression ni classement",
  },
];
const WHY_QUIZORA = [
  {
    icon: Brain,
    title: "Compétition intelligente",
    desc: "Le score dépend de la précision, pas seulement de la rapidité",
  },
  {
    icon: Play,
    title: "Modes de jeu variés",
    desc: "5 modes adaptés à chaque objectif d'apprentissage",
  },
  {
    icon: Trophy,
    title: "Apprentissage renforcé",
    desc: "Feedbacks détaillés et progression suivie",
  },
  {
    icon: Users,
    title: "Temps réel fluide",
    desc: "Jusqu'à 60 joueurs simultanés par session",
  },
];
export const NewHomePage = () => {
  const navigate = useNavigate();
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-bold text-foreground">QUIZORA</h1>
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => navigate("/login")}
              className="px-6 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Se connecter
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => navigate("/register")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              S'inscrire
            </motion.button>
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-4 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
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
          className="relative z-10"
        >
          <h2 className="text-6xl font-bold text-foreground mb-6">
            Apprendre, jouer,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              progresser
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            La plateforme de quiz interactifs qui transforme l'apprentissage en
            expérience engageante et compétitive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => navigate("/join")}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <Play className="w-5 h-5" />
              Rejoindre une partie
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => navigate("/register")}
              className="px-8 py-4 bg-white border-2 border-border text-foreground rounded-xl font-medium text-lg flex items-center justify-center gap-2 hover:border-primary/50 transition-all"
            >
              <Plus className="w-5 h-5" />
              Créer une partie
            </motion.button>
          </div>
        </motion.div>
      </section>
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Pourquoi Quizora ?
            </h3>
            <p className="text-muted-foreground text-lg">
              Une approche moderne de l'apprentissage par le jeu
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_QUIZORA.map((item, index) => (
              /*#__PURE__*/ <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -4,
                }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Modes de jeu
          </h3>
          <p className="text-muted-foreground text-lg">
            Choisissez le mode adapté à vos objectifs d'apprentissage
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {GAME_MODES.map((mode, index) => (
            /*#__PURE__*/ <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
              }}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <mode.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">{mode.title}</h4>
              <p className="text-sm text-muted-foreground">{mode.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-4xl font-bold text-white mb-4">
              Prêt à transformer votre apprentissage ?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Rejoignez des milliers d'apprenants et enseignants qui utilisent
              Quizora
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => navigate("/register")}
              className="px-10 py-4 bg-white text-primary rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Commencer gratuitement
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      <footer className="border-t border-border bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-foreground">QUIZORA</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Apprendre, jouer, progresser
              </p>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-3">Produit</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-3">Ressources</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-3">Entreprise</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 Quizora. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};
