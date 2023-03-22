import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
// import './main.built.js';
import React, { Component } from "react";
import { render } from "react-dom";
// import MouseParticles from "./react-mouse-particles/index";
import MouseParticles from "react-mouse-particles";
import ReactGA from 'react-ga';

ReactGA.initialize('G-NWKSC6JFP5');

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <MouseParticles g={1} num={6} radius={10} alpha={0.5} v={0.5} life={1} color="random" cull="stats,image-wrapper" level={6} /> */}
      {/* <AnimatedParticles
        g={0.1}
        num={1}
        radius={20}
        alpha={0.65}
        v={1.5}
        life={0.8}
        color={[
          "#FF4136", // Red
          "#FFDC00", // Yellow
          "#FF851B", // Orange
          "#2ECC40", // Green
          "#0074D9", // Blue
          "#B10DC9", // Purple
          "#F012BE", // Magenta
          "#01FF70", // Lime
          "#FFD700", // Gold
          "#39CCCC"  // Teal
        ]}
        cull="stats,image-wrapper"
        level={6} /> */}
      <MouseParticles
        g={0.1}
        num={1}
        radius={20}
        alpha={0.65}
        v={1.5} 
        life={0.8}
        color={[
          "#FF4136", // Red
          "#FFDC00", // Yellow
          "#FF851B", // Orange
          "#2ECC40", // Green
          "#0074D9", // Blue
          "#B10DC9", // Purple
          "#F012BE", // Magenta
          "#01FF70", // Lime
          "#FFD700", // Gold
          "#39CCCC"  // Teal
        ]}
        cull="stats,image-wrapper"
        level={6} />
      <Banner />
      <Skills />
      {/* <Projects /> */}
      <Footer />
      {/* <script type="text/javascript" src="main.built.js"></script> */}
    </div>
  );
}

export default App;
