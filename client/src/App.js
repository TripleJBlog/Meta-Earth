import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import LoginPage from "./components/views/LoginPage/LoginPage";
import LandingPage from "./components/views/LandingPage/LandingPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import OrderPage from "./components/views/OrderPage";
import OrderData from "./data/data";

function RendingPage() {
  const location = useLocation();
  if (location.pathname == "/") {
    return <LandingPage />;
  } else {
    return <></>;
  }
}

function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="register">Register </Link>
        <Link to="login">Login </Link>
        <Link to="dashboard">Dashboard </Link>
        <Link to="orderpage">OrderPage </Link>
      </nav>
      <hr />
      <RendingPage />
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
          <Route path="orderpage" element={<OrderPage data={OrderData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
