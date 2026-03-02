import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, LogIn, Trophy } from "lucide-react";
export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const result = await response.text();

    if(response.ok) {
      alert("Connexion réussie !");
      console.log("React reçoit :", result); // "ok"
      navigate("/dashboard");
    } else {
      alert(result); // "Email ou mot de passe incorrect"
    }
  } catch (error) {
    console.error(error);
  }
};    
  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
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
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Trophy className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h1 className="text-3xl font-bold text-foreground">QUIZORA</h1>
            </div>
          </Link>
          <p className="text-muted-foreground">Apprendre, jouer, progresser</p>
        </div>
        <div className="bg-card border border-border rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Connexion</h2>
          <p className="text-muted-foreground mb-6">
            Bienvenue ! Connectez-vous à votre compte.
          </p>
          <form 
  onSubmit={(e) => {
    e.preventDefault();  // empêche le rechargement de la page
    handleLogin();       // appelle ton login
  }} 
  className="space-y-5"
>

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
                  placeholder="vous@exemple.com"
                  className="w-full bg-input-background border border-border rounded-xl pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                  className="w-full bg-input-background border border-border rounded-xl pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">
                  Se souvenir de moi
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.99,
              }}
              disabled={!email || !password}
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <LogIn className="w-5 h-5" />
              Se connecter
            </motion.button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Pas encore de compte ?{" "}
              <Link
                to="/register"
                className="text-primary font-medium hover:underline"
              >
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-3">ou</p>
          <Link to="/join">
            <motion.button
              whileHover={{
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.99,
              }}
              className="w-full bg-muted text-foreground py-3 rounded-xl font-medium border border-border hover:border-primary/50 transition-all"
            >
              Rejoindre une partie sans compte
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
