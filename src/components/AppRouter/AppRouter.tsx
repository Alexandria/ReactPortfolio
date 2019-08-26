import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import { Animated } from "react-animated-css";
import { NavBar } from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import { myProjects } from "../../utils/myProjects";
import Projects from "../Projects/Projects";
import "./AppRouter.css";
import { Contact } from "../Contact/Contact";

const projects = () => {
  return (
    <div className="components">
      <Projects projects={myProjects} />
    </div>
  );
};

const aboutMe = () => {
  return (
    <div className="components">
      <AboutMe />
    </div>
  );
};

const header = () => {
  return (
    <div className="components">
      <Header />
    </div>
  );
};

const contact = () => {
  return (
    <div className="components">
      <Contact />
    </div>
  );
};

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="AppRouter">
        <Switch>
          <Route exact path={["/home", "/","/ReactPortfolio/"]} render={header} />
          <Route exact path="/about" render={aboutMe} />
          <Route exact path="/projects" render={projects} />
          <Route exact path="/contact" render={contact} />
        </Switch>
      </div>
    </Router>
  );
};
