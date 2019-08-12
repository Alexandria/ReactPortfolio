import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Header from "../Header/Header";
import { Animated } from "react-animated-css";
import { NavBar } from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import { myProjects } from "../../utils/myProjects";
import Projects from "../Projects/Projects";
import "./AppRouter.css";

const projects = () => {
  return (
    <div>
      <Animated animationIn="lightSpeedIn" animationOut="fadeOut" isVisible>
        <Projects projects={myProjects} />
      </Animated>
      {/* <ScrollAnimation animateIn="lightSpeedIn" /> */}
    </div>
  );
};

const aboutMe = () => {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible>
      <AboutMe />
    </Animated>
  );
};

const header = () => {
  return (
    <div>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible>
        <Header />
      </Animated>
    </div>
  );
};

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="components">
        <Switch>
          <Route exact path="/home" render={header} />
          <Route exact path="/about" render={aboutMe} />
          <Route exact path="/projects" render={projects} />
        </Switch>
      </div>
    </Router>
  );
};
