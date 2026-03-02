import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  TrendingUp,
  Target,
  Zap,
  Plus,
  Play,
  History,
  User,
  LogOut,
  BookOpen,
  LayoutDashboard,
  Settings,
  Menu,
  X,
} from "lucide-react";
const STATS = [
  {
    icon: Trophy,
    label: "Quiz joués",
    value: "24",
    color: "text-primary",
  },
  {
    icon: Target,
    label: "Précision",
    value: "87%",
    color: "text-secondary",
  },
  {
    icon: Zap,
    label: "Meilleur score",
    value: "950",
    color: "text-success",
  },
  {
    icon: TrendingUp,
    label: "Progression",
    value: "+12%",
    color: "text-primary",
  },
];
const RECENT_GAMES = [
  {
    title: "Histoire de France",
    mode: "Sprint",
    score: 850,
    date: "2 heures",
    accuracy: 85,
  },
  {
    title: "Mathématiques",
    mode: "Stratège",
    score: 920,
    date: "1 jour",
    accuracy: 92,
  },
  {
    title: "Géographie",
    mode: "Équipe",
    score: 780,
    date: "3 jours",
    accuracy: 78,
  },
];
export const Dashboard = () => {
  const navigate = useNavigate();
  const userName = "Jean Dupont";
  const userRole = "Apprenant";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background">
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-card border-b border-border z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-lg font-bold text-foreground">QUIZORA</h1>
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isSidebarOpen ? (
              /*#__PURE__*/ <X className="w-6 h-6 text-foreground" />
            ) : (
              /*#__PURE__*/ <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          /*#__PURE__*/ <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border p-6 z-50 transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-xl font-bold text-foreground">QUIZORA</h1>
        </div>
        <nav className="space-y-2">
          {[
            {
              icon: LayoutDashboard,
              label: "Dashboard",
              path: "/dashboard",
              active: true,
            },
            {
              icon: BookOpen,
              label: "Mes quiz",
              path: "/my-quizzes",
            },
            {
              icon: Plus,
              label: "Créer un quiz",
              path: "/create",
            },
            {
              icon: Play,
              label: "Créer une partie",
              path: "/create-session",
            },
            {
              icon: Play,
              label: "Rejoindre une partie",
              path: "/join",
            },
            {
              icon: History,
              label: "Historique",
              path: "/history",
            },
            {
              icon: User,
              label: "Profil",
              path: "/profile",
            },
            {
              icon: Settings,
              label: "Paramètres",
              path: "/settings",
            },
          ].map((item) => (
            /*#__PURE__*/ <motion.button
              whileHover={{
                x: 4,
              }}
              onClick={() => {
                navigate(item.path);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={() => navigate("/login")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </aside>
      <main className="lg:ml-64 p-6 lg:p-8 pt-20 lg:pt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Bonjour, {userName} 👋
          </h2>
          <p className="text-muted-foreground">
            Bienvenue sur votre tableau de bord {userRole.toLowerCase()}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {STATS.map((stat, index) => (
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
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            whileHover={{
              scale: 1.02,
            }}
            onClick={() => navigate("/create-session")}
            className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 cursor-pointer shadow-lg hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Créer une partie
            </h3>
            <p className="text-white/90">
              Lancez une session et devenez modérateur
            </p>
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
              delay: 0.5,
            }}
            whileHover={{
              scale: 1.02,
            }}
            onClick={() => navigate("/create")}
            className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 cursor-pointer shadow-lg hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Créer un quiz
            </h3>
            <p className="text-white/90">Créez vos propres questions et quiz</p>
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
              delay: 0.6,
            }}
            whileHover={{
              scale: 1.02,
            }}
            onClick={() => navigate("/join")}
            className="bg-gradient-to-br from-success to-success/80 rounded-2xl p-8 cursor-pointer shadow-lg hover:shadow-xl transition-all"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Play className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Rejoindre une partie
            </h3>
            <p className="text-white/90">Participez à une session existante</p>
          </motion.div>
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
            delay: 0.7,
          }}
          className="bg-card border border-border rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-foreground">
              Mes dernières parties
            </h3>
            <button
              onClick={() => navigate("/history")}
              className="text-primary hover:underline text-sm font-medium"
            >
              Voir tout
            </button>
          </div>
          <div className="space-y-4">
            {RECENT_GAMES.map((game, index) => (
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
                  delay: 0.8 + index * 0.1,
                }}
                className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-muted/80 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{game.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {game.mode} • Il y a {game.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-primary">
                    {game.score}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {game.accuracy}% précision
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};
