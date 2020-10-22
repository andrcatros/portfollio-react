import React from 'react';
import { Switch, Route } from "react-router-dom";

import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

import '../styles/App.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        this is app header
      </header>
        <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
