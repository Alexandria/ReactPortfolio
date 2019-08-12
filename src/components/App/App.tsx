import React from "react";
import "./App.css";
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
