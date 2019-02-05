import React, { Component } from "react";

import BackgroundMenu from "./presentation/BackgroundMenu";
import EditorWindow from "./presentation/EditorWindow";
import ToolsMenu from "./presentation/ToolsMenu";

import "./styles/App.css";
import "./styles/Layout.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Layout">
          <header className="Header">Simple Editor</header>
          <BackgroundMenu />
          <EditorWindow width={400} height={400} />
          <ToolsMenu />
          <div className="Download">
            <button className="main-button">Download</button>
          </div>
          <div className="save-load">
            <button className="main-button">Save</button>
            <button className="main-button">Load</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
