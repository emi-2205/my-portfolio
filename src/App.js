import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
// import './main.built.js';

// import React, { Component } from "react";
// import { render } from "react-dom";
// import MouseParticles from "react-mouse-particles";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <MouseParticles
          g={0}
          num={0.1}
          radius={10}
          life={3}
          v={0.1}
          color="random"
          alpha={0.5}
          level={6}
        />
      <Banner />
      <Skills />
      {/* <Projects /> */}
      <Footer />
      {/* <script type="text/javascript" src="main.built.js"></script> */}
    </div>
  );
}

export default App;
