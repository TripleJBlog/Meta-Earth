import "./App.css";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/views/LoginPage/LoginPage";
import LandingPage from "./components/views/LandingPage/LandingPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
