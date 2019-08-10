import { Project } from "../../components/ProjectCard/ProjectCard";
import typescript from "../../assests/icons/typescript.png";
import Meeplely from "../../assests/images/Meeplely.png";
import nodeJs from "../../assests/icons/nodeJs.png";
import react from "../../assests/icons/react.png";
import postgres from "../../assests/icons/postgres.png";

export const myProjects: Project[] = [
  {
    title: "Meeplely",
    img: Meeplely,
    description:
      "Full stack web application that will help you manage your board game collection.",
    toolIcons: [typescript, nodeJs, react, postgres]
  }
];

export const project: Project = {
  title: "Meeplely",
  img: Meeplely,
  description:
    "Full stack web application that will help you manage your board game collection.",
  toolIcons: [typescript, nodeJs, react, postgres]
};
