import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-right">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
        <li>
          <a href="/info">Info</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
