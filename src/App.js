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
      projectState: null,
      projectName: "MyProject"
    };
  }

  updateStage = stage => {
    this.setState({ projectState: stage });
  };

  handleLogoDrag = (e, url) => {
    this.setState({ draggedImageURL: url });
    // console.log(e.target);
  };

  handleDownLoadClick = btn => {
    console.log(this.state.projectState);
    function downloadURI(uri, name) {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    if (this.state.projectState) {
      let dataURL = this.state.projectState.toDataURL({ pixelRatio: 1 });
      downloadURI(dataURL, `${this.state.projectName}.png`);
    }
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
          downloadDisabled={Boolean(!this.state.projectState)}
        />
      </div>
    );
  }
}

export default App;
