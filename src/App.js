import React, { Component } from "react";

import AppLayout from "./presentation/AppLayout";

import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App ">
        <AppLayout />
      </div>
    );
  }
}

export default App;
