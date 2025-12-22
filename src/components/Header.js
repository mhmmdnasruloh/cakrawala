// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img
            src="/logo.webp"
            alt="Logo Cakrawala EduCentre"
            className="logo"
          />
        </Link>
        <h1>LEMBAGA PENDIDIKAN DAN PELATIHAN CAKRAWALA EDUCENTRE</h1>
      </div>
    </header>
  );
}

export default Header;
