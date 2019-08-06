import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="jumbotron ">
      <div className="container">
        <h1 className="display-4">Lex Sanders</h1>
        <p className="lead">Software Developer</p>
      </div>
    </div>
  );
};

export default Header;
