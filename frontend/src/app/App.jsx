import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NewHomePage } from "@/app/components/NewHomePage";
import { Login } from "@/app/components/Login";
import { Register } from "@/app/components/Register";
import { Dashboard } from "@/app/components/Dashboard";
import { JoinGame } from "@/app/components/JoinGame";
import { CreateQuiz } from "@/app/components/CreateQuiz";
import { CreateSession } from "@/app/components/CreateSession";
import { Lobby } from "@/app/components/Lobby";
import { SelectGameMode } from "@/app/components/SelectGameMode";
import { GamePlay } from "@/app/components/GamePlay";
import { ModeratorView } from "@/app/components/ModeratorView";
import { Leaderboard } from "@/app/components/Leaderboard";
import { Results } from "@/app/components/Results";
import { LearningMode } from "@/app/components/LearningMode";
import { Profile } from "@/app/components/Profile";
export default function App() {
  return (
    /*#__PURE__*/ <BrowserRouter>
      <Routes>
        <Route path="/" element={/*#__PURE__*/ <NewHomePage />} />
        <Route path="/login" element={/*#__PURE__*/ <Login />} />
        <Route path="/register" element={/*#__PURE__*/ <Register />} />
        <Route path="/dashboard" element={/*#__PURE__*/ <Dashboard />} />
        <Route path="/join" element={/*#__PURE__*/ <JoinGame />} />
        <Route path="/create" element={/*#__PURE__*/ <CreateQuiz />} />
        <Route
          path="/create-session"
          element={/*#__PURE__*/ <CreateSession />}
        />
        <Route path="/lobby" element={/*#__PURE__*/ <Lobby />} />
        <Route path="/select-mode" element={/*#__PURE__*/ <SelectGameMode />} />
        <Route path="/gameplay" element={/*#__PURE__*/ <GamePlay />} />
        <Route
          path="/moderator-view"
          element={/*#__PURE__*/ <ModeratorView />}
        />
        <Route path="/leaderboard" element={/*#__PURE__*/ <Leaderboard />} />
        <Route path="/results" element={/*#__PURE__*/ <Results />} />
        <Route path="/learning-mode" element={/*#__PURE__*/ <LearningMode />} />
        <Route path="/profile" element={/*#__PURE__*/ <Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
