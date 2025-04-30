import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PerfilPage from "./pages/PerfilPage";
import LoginPage from "./pages/LoginPage";
import SingUpPage from "./pages/SingUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SingUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
