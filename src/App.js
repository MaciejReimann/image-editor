import React, { Component } from "react";
import AppLayout from "./presentation/AppLayout";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logos: [
        "./assets/logo_one.png",
        "./assets/logo_two.png",
        "./assets/logo_three.png"
      ]
    };
  }
  render() {
    return (
      <div className="App ">
        <AppLayout logos={this.state.logos} />
      </div>
    );
  }
}

export default App;
