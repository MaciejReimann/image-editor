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
      ],
      backgroundImageURL: "https://konvajs.github.io/assets/darth-vader.jpg",
      draggedImageURL: ""
    };
  }

  handleLogoDrag = (e, url) => {
    this.setState({ draggedImageURL: url });
    // console.log(e.target);
  };

  render() {
    return (
      <div className="App ">
        <AppLayout
          backgroundImageURL={this.state.backgroundImageURL}
          draggedImageURL={this.state.draggedImageURL}
          logos={this.state.logos}
          onDragEnd={this.handleLogoDrag}
        />
      </div>
    );
  }
}

export default App;
