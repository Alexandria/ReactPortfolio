import React from "react";
import "./Projects.css";
import ProjectCard, { Project } from "../ProjectCard/ProjectCard";
import { Animated } from "react-animated-css";

import { project } from "../../utils/myProjects";
interface Projects {
  projects: Project[];
}

const Projects: React.FC<Projects> = (props: Projects) => {
  const myProjects = props.projects.map(project => (
    <ProjectCard
      title={project.title}
      description={project.description}
      img={project.img}
      toolIcons={project.toolIcons}
    />
  ));

  return (
    <div className="Projects">
      <div className="content">{myProjects}</div>
    </div>
  );
};

export default Projects;
