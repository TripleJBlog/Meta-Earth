import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="about">About</Link> |
        <Link to="/Dashboard">Dashboard</Link> |
        <Link to="/register">RegisterPage</Link> |
      </nav>
    </div>
  );
}

export default NavBar;
