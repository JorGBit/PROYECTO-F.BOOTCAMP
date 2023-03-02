/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { NotePage } from "./pages/NotePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NoteListPage } from "./pages/NoteListPage";
import { UserPage } from "./pages/UserPage";
import { NewNotePage } from "./pages/NewNotePage";
function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newNote" element={<NewNotePage />} />
        <Route path="/noteInfo/:id" element={<NotePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/noteList" element={<NoteListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
