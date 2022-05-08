import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import LoginPage from "./components/views/LoginPage/LoginPage";
import LandingPage from "./components/views/LandingPage/LandingPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="register">Register </Link>
        <Link to="login">Login </Link>
        <Link to="dashboard">Dashboard </Link>
      </nav>
      <hr />
      {/* <LandingPage /> */}
      <Outlet />
    </>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
