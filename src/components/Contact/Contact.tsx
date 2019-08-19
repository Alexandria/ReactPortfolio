import React from "react";
import { Typography, Icon } from "@material-ui/core";
import "./Contact.css";

export const Contact: React.FC = () => {
  return (
    <div className="Contact">
      <Icon
        className="fab fa-github-alt"
        style={{ fontSize: "250px", margin: "5%" }}
      />
      <Icon
        className="fab fa-linkedin"
        style={{ fontSize: "250px", margin: "5%" }}
      />
      <Icon
        className="fab fa-twitter"
        style={{ fontSize: "250px", margin: "5%" }}
      />
    </div>
  );
};
