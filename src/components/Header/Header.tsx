import React from "react";
import "./Header.css";
import { Typography } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <Typography variant="h1" style={{ fontFamily: "Anton" }} gutterBottom>
        Lex Sanders
      </Typography>
      <Typography variant="h2" gutterBottom>
        Software Developer
      </Typography>
    </div>
  );
};

export default Header;
