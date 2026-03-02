import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Mail,
  Lock,
  Save,
  Trophy,
  Target,
  Zap,
  TrendingUp,
  Award,
  BookOpen,
} from "lucide-react";
const AVATARS = ["🦊", "🐼", "🦁", "🐯", "🦉", "🐺", "🦅", "🐸"];
const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Premier quiz complété",
    desc: "Complétez votre premier quiz",
    earned: true,
  },
  {
    icon: Zap,
    title: "Éclair",
    desc: "Répondez à 10 questions en moins de 5 secondes",
    earned: true,
  },
  {
    icon: Target,
    title: "Précision parfaite",
    desc: "Obtenez 100% de précision sur un quiz",
    earned: false,
  },
  {
    icon: Award,
    title: "Expert",
    desc: "Gagnez 10 parties de suite",
    earned: false,
  },
];
export const Profile = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("Jean Dupont");
  const [email, setEmail] = useState("jean.dupont@exemple.com");
  const [selectedAvatar, setSelectedAvatar] = useState("🦊");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userRole = "Apprenant";
  const memberSince = "Janvier 2026";
  const stats = [
    {
      icon: BookOpen,
      label: "Quiz joués",
      value: "24",
      color: "text-primary",
    },
    {
      icon: Trophy,
      label: "Victoires",
      value: "18",
      color: "text-secondary",
    },
    {
      icon: Target,
      label: "Précision moyenne",
      value: "87%",
      color: "text-success",
    },
    {
      icon: TrendingUp,
      label: "Progression",
      value: "+12%",
      color: "text-primary",
    },
  ];
  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert("Profil mis à jour !");
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
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Mon Profil
          </h1>
          <p className="text-muted-foreground">
            Gérez vos informations personnelles et vos préférences
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
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">
                Informations personnelles
              </h2>
              <form onSubmit={handleSaveProfile} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Avatar
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                      {selectedAvatar}
                    </div>
                    <div className="flex-1 grid grid-cols-8 gap-2">
                      {AVATARS.map((avatar) => (
                        /*#__PURE__*/ <button
                          type="button"
                          onClick={() => setSelectedAvatar(avatar)}
                          className={`aspect-square rounded-xl text-2xl flex items-center justify-center transition-all ${selectedAvatar === avatar ? "bg-primary shadow-lg scale-110" : "bg-muted hover:bg-input-background border border-border"}`}
                        >
                          {avatar}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-input-background border border-border rounded-xl pl-11 pr-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-input-background border border-border rounded-xl pl-11 pr-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-xl">
                    <div className="text-sm text-muted-foreground mb-1">
                      Rôle
                    </div>
                    <div className="font-bold text-foreground">{userRole}</div>
                  </div>
                  <div className="p-4 bg-muted rounded-xl">
                    <div className="text-sm text-muted-foreground mb-1">
                      Membre depuis
                    </div>
                    <div className="font-bold text-foreground">
                      {memberSince}
                    </div>
                  </div>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.99,
                  }}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <Save className="w-5 h-5" />
                  Sauvegarder les modifications
                </motion.button>
              </form>
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
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-foreground mb-6">
                Modifier le mot de passe
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mot de passe actuel
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                      className="w-full bg-input-background border border-border rounded-xl pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                      className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Confirmer le nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                      className="w-full bg-input-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <button className="w-full bg-muted text-foreground py-3 rounded-xl font-medium border border-border hover:border-primary/50 transition-all">
                  Modifier le mot de passe
                </button>
              </div>
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
                delay: 0.2,
              }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-bold text-foreground mb-4">Statistiques</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  /*#__PURE__*/ <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                    <span className={`font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
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
                delay: 0.3,
              }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-bold text-foreground mb-4">
                Succès débloqués
              </h3>
              <div className="space-y-3">
                {ACHIEVEMENTS.map((achievement, index) => (
                  /*#__PURE__*/ <div
                    className={`p-3 rounded-xl border ${achievement.earned ? "border-secondary bg-secondary/5" : "border-border bg-muted opacity-50"}`}
                  >
                    <div className="flex items-start gap-3">
                      <achievement.icon
                        className={`w-5 h-5 ${achievement.earned ? "text-secondary" : "text-muted-foreground"}`}
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">
                          {achievement.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
