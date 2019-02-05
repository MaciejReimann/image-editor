import React, { Component } from "react";
import Canvas from "./components/Canvas";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Canvas />
        </header>
      </div>
    );
  }
}

export default App;
