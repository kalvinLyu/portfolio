import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css';
import Welcome from "./components/Welcome";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Welcome />
      <NavigationBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {console.log("https://kalvinlyu.github.io/portfolio/")}
    </div>
  );
}

export default App;

