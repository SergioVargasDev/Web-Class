import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("auth"); // Remove authentication token
  };

  return (
    <nav className="navbar">
      <ul className="navbar-right">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>
            Cerrar Sesión
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
