import React from "react";
import "./App.css";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default App;
