import React, { Component } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import { Nav } from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Carousel />
      </div>
    );
  }
}

export default App;
