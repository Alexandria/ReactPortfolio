import React from "react";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar fixed-bottom navbar-expanded-sm bg-dark">
      <div className="nav nav-pills" id="nav-tab" role="tablist">
        <a className="nav-item nav-link" href="/">
          Home
        </a>
        <a className="nav-item  nav-link" href="/about">
          about
        </a>
        <a className="nav-item nav-link" href="/contact">
          contact
        </a>
        <a className="nav-item nav-link" href="/projects">
          projects
        </a>
      </div>
    </nav>
  );
};
