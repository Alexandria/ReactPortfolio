import React from "react";
import "./App.css";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import { myProjects } from "../../utils/myProjects";
import ScrollAnimation from "react-animate-on-scroll";
import { NavBar } from "../NavBar/NavBar";
import { AppRouter } from "../AppRouter/AppRouter";

const App: React.FC = () => {
  return (
    <div>
      <AppRouter />
      <NavBar />
    </div>
  );
};

export default App;

{
  /* <Header />
  <NavBar />
  <AboutMe />
  <ScrollAnimation animateIn="lightSpeedIn">
    <Projects projects={myProjects} />
  </ScrollAnimation> */
}
