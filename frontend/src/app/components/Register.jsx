import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate, Link } from "react-router-dom";
import { User,Mail,Lock,UserPlus,Trophy,GraduationCap,BookOpen,} from "lucide-react";

export const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileType, setProfileType] = useState(null);
  
  const handleRegister = async (e) => {
  e.preventDefault();

  // Construire l'objet utilisateur à envoyer
  const newUser = {
    nom: lastName,
    prenom: firstName,
    email: email,
    password: password,
    role: profileType === "teacher" ? "ENSEIGNANT" : "APPRENANT"
  };

  try {
    const response = await fetch("http://localhost:8080/api/inscription/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'inscription");
    }

    alert("Inscription réussie !");
    navigate("/login"); // ou "/dashboard" si tu veux
  } catch (error) {
    console.log(error);
    alert("Erreur : " + error.message);
  }
};

  return (
    /*#__PURE__*/ <div className="min-h-screen bg-background px-4 py-8 relative overflow-hidden">
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
      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Trophy className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h1 className="text-3xl font-bold text-foreground">QUIZORA</h1>
            </div>
          </Link>
          <p className="text-muted-foreground">
            Créez votre compte et commencez à apprendre
          </p>
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
        >
          <div className="bg-card border border-border rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Inscription
            </h2>
            <p className="text-muted-foreground mb-6">
              Rejoignez Quizora et transformez votre apprentissage
            </p>
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Je suis un(e) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.button
                    type="button"
                    whileHover={{
                      y: -2,
                    }}
                    onClick={() => setProfileType("student")}
                    className={`p-6 border-2 rounded-xl transition-all ${profileType === "student" ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" : "border-border hover:border-primary/50"}`}
                  >
                    <BookOpen
                      className={`w-10 h-10 mx-auto mb-3 ${profileType === "student" ? "text-primary" : "text-muted-foreground"}`}
                    />
                    <h3 className="font-bold text-foreground mb-1">
                      Apprenant
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Je veux apprendre et progresser en jouant
                    </p>
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{
                      y: -2,
                    }}
                    onClick={() => setProfileType("teacher")}
                    className={`p-6 border-2 rounded-xl transition-all ${profileType === "teacher" ? "border-secondary bg-secondary/5 shadow-lg shadow-secondary/10" : "border-border hover:border-secondary/50"}`}
                  >
                    <GraduationCap
                      className={`w-10 h-10 mx-auto mb-3 ${profileType === "teacher" ? "text-secondary" : "text-muted-foreground"}`}
                    />
                    <h3 className="font-bold text-foreground mb-1">
                      Enseignant
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Je veux créer des quiz et suivre les progrès
                    </p>
                  </motion.button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Dupont"
                      className="w-full bg-input-background border border-border rounded-xl pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Prénom *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Jean"
                      className="w-full bg-input-background border border-border rounded-xl pl-11 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Adresse email *
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
                  Mot de passe *
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
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.99,
                }}
                disabled={
                  !firstName || !lastName || !email || !password || !profileType
                }
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <UserPlus className="w-5 h-5" />
                Créer mon compte
              </motion.button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Vous avez déjà un compte ?{" "}
                <Link
                  to="/login"
                  className="text-primary font-medium hover:underline"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
