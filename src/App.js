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
      draggedImageURL: "",
      editorState: null
    };
  }

  updateStage = stage => {
    // this.setState({ editorState: stage });
    this.handleDownLoadClick(stage);
    // console.log(stage);
  };

  handleLogoDrag = (e, url) => {
    this.setState({ draggedImageURL: url });
    // console.log(e.target);
  };

  handleDownLoadClick = stage => {
    function downloadURI(uri, name) {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    const dataURL = stage.toDataURL({ pixelRatio: 1 });
    downloadURI(dataURL, "stage.png");

    // console.log(stage);
  };

  render() {
    return (
      <div className="App ">
        <AppLayout
          updateStage={this.updateStage}
          backgroundImageURL={this.state.backgroundImageURL}
          draggedImageURL={this.state.draggedImageURL}
          logos={this.state.logos}
          onDragEnd={this.handleLogoDrag}
          onDownloadClick={this.handleDownLoadClick}
        />
      </div>
    );
  }
}

export default App;
