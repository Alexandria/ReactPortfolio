import React from "react";
import "./Projects.css";
import typescript from "../../assests/icons/typescript.png";
import Meeplely from "../../assests/images/Meeplely.jpg";
import nodeJs from "../../assests/icons/nodeJs.png";
import react from "../../assests/icons/react.png";
import postgres from "../../assests/icons/postgres.png";
import { Project } from "../ProjectCard/ProjectCard";

interface Projects {
  projects: Project[];
}

const Projects: React.FC<Projects> = () => {
  return (
    <div className="card" style={{ maxWidth: "20rem" }}>
      <img src={Meeplely} height={300} alt="Meeple" />
      <div className="card-header">Meeplely</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            Full stack web application that will help you manage your board game
            collection.
          </p>
          <footer>
            <img src={typescript} height={40} width={40} alt="Type Script" />
            <img src={nodeJs} height={40} width={40} alt="Node JS" />
            <img src={react} height={40} width={40} alt="react" />
            <img src={postgres} height={40} width={40} alt="postgres" />
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Projects;
