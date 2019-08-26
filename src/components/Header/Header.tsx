import React from "react";
import "./Header.css";
import { Typography } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <div className="contentHeader">
        <Typography variant="h3" style={{ fontFamily: "Anton" }} gutterBottom>
          Hello! My name is Lex.
        </Typography>
        <Typography variant="h3" style={{ fontFamily: "Anton" }} gutterBottom>
          I make full stack web applications.
        </Typography>
        <Typography variant="h3" style={{ fontFamily: "Anton" }} gutterBottom>
          Feel free to checkout my projects!
        </Typography>
      </div>
    </div>
  );
};

export default Header;
