import { Project } from "../../components/ProjectCard/ProjectCard";
import typescript from "../../assests/icons/typescript.png";
import Meeplely from "../../assests/images/Meeplely.png";
import nodeJs from "../../assests/icons/nodeJs.png";
import react from "../../assests/icons/react.png";
import postgres from "../../assests/icons/postgres.png";
import python from "../../assests/icons/python.png";
import phpmyadmin from "../../assests/icons/phpmyadmin.png";
import insomnia from "../../assests/icons/insomnia.png";
import django from "../../assests/icons/django.jpg";

export const myProjects: Project[] = [
  {
    title: "Meeplely",
    img: Meeplely,
    description:
      "Full stack web application that will help you manage your board game collection.",
    toolIcons: [typescript, nodeJs, react, postgres, insomnia]
  },
  {
    title: "Justice for Barb Blog",
    img: Meeplely,
    description:
      "Full stack web application that will help you manage your board game collection.",
    toolIcons: [django, python, phpmyadmin]
  }
];

export const project: Project = {
  title: "Meeplely",
  img: Meeplely,
  description:
    "Full stack web application that will help you manage your board game collection.",
  toolIcons: [typescript, nodeJs, react, postgres]
};
