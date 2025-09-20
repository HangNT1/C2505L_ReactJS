import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default HeaderComponent;
