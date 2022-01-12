import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css';
import Welcome from "./components/Welcome";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Nav />
      {console.log("https://kalvinlyu.github.io/portfolio/")}
    </div>
  );
}

export default App;

