import "./App.css";
import axios from "axios";
import { useEffect } from "react";
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
import BuildingPage from "./components/views/BuildingPage";
import OrderPage from "./components/views/OrderPage";
import OrderData from "./data/data";
import React, { useState } from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexItem = styled.div`
  flex: 1;
  overflow: auto;
`;

const StyleIcon = styled.img`
  width: 35px;
  height: 35px;
`;

function RendingPage() {
  const location = useLocation();
  if (location.pathname === "/") {
    return <LandingPage />;
  } else {
    return <></>;
  }
}

function Home() {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios.get("/api/users/balance").then((response) => {
      setBalance(response.data);
    });
  }, []);

  return (
    <>
      <FlexContainer className="balance">
        <FlexItem>
          <StyleIcon src={require("./assets/icon_gold.png")} />
          <span className="gold">{balance.gold} G</span>
        </FlexItem>
        <FlexItem>
          <StyleIcon src={require("./assets/icon_dollar.png")} />
          <span className="cash">{balance.cash}</span>
        </FlexItem>
      </FlexContainer>
      <nav>
        <Link to="/">Home </Link>
        <Link to="register">Register </Link>
        <Link to="login">Login </Link>
        <Link to="dashboard">Dashboard </Link>
        <Link to="orderpage">OrderPage </Link>
        <Link to="building">Buildings </Link>
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
          <Route path="building" element={<BuildingPage data={OrderData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
