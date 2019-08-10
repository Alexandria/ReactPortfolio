import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Header from "../Header/Header";
import { Animated } from "react-animated-css";
import { NavBar } from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import { myProjects } from "../../utils/myProjects";
import Projects from "../Projects/Projects";

const home = () => {
  return (
    <div>
      {/* <Animated animationIn="fadeIn" animationOut="slideOutLeft" isVisible> */}
      <Header />
      {/* </Animated> */}
    </div>
  );
};

const about = () => {
  return (
    <div>
      {/* <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible> */}
      <AboutMe />
      {/* </Animated> */}
    </div>
  );
};

const projects = () => {
  return (
    <div>
      <ScrollAnimation animateIn="lightSpeedIn">
        <Projects projects={myProjects} />
      </ScrollAnimation>
    </div>
  );
};

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route exact path={["/", "/home"]} render={home} />
      <Route exact path="/about" render={about} />
      <Route exact path="/projects" render={projects} />
    </Router>
  );
};
