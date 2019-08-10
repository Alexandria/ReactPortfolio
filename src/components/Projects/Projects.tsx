import React from "react";
import "./Projects.css";
import ProjectCard, { Project } from "../ProjectCard/ProjectCard";

interface Projects {
  projects: Project[];
}

const Projects: React.FC<Projects> = (props: Projects) => {
  return (
    <div>
      {props.projects.map(project => {
        const { title, description, img, toolIcons } = project;
        return (
          <ProjectCard
            title={title}
            description={description}
            img={img}
            toolIcons={toolIcons}
          />
        );
      })}
    </div>
  );
};

export default Projects;

// <div className="card" style={{ maxWidth: "20rem" }}>
//     <img src={Meeplely} height={300} alt="Meeple" />
//     <div className="card-header">Meeplely</div>
//     <div className="card-body">
//       <blockquote className="blockquote mb-0">
//         <p>
//           Full stack web application that will help you manage your board game
//           collection.
//         </p>
//         <footer>
//           <img src={typescript} height={40} width={40} alt="Type Script" />
//           <img src={nodeJs} height={40} width={40} alt="Node JS" />
//           <img src={react} height={40} width={40} alt="react" />
//           <img src={postgres} height={40} width={40} alt="postgres" />
//         </footer>
//       </blockquote>
//     </div>
//   </div>
// );
