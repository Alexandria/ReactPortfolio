import React from "react";
import "./App.css";
import { AppRouter } from "../AppRouter/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
