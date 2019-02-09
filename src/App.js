import React, { Component } from "react";
import AppLayout from "./presentation/AppLayout";
import downloadURI from "./helpers/downloadURI";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logosURLs: [
        "./assets/logo_one.png",
        "./assets/logo_two.png",
        "./assets/logo_three.png"
      ],
      currentProject: {
        data: { name: "MyProject", background: null, texts: [], images: [] },
        view: null
      },
      draggedImageURL: ""
    };
  }

  componentDidMount() {
    let img = new window.Image();
    img.setAttribute("crossOrigin", "anonymous"); // see why this is necessary: https://goo.gl/FJD5vg
    img.src = "/assets/empty_background.bmp";
    img.onload = () => {
      this.setState({ currentProject: { background: img } });
    };
  }

  updateProject = data => {
    // this.setState({ currentProject: data });
  };

  handleLogoDrag = (e, url) => {
    // this.setState({ draggedImageURL: url });
    // console.log(e.target);
  };

  handleDownLoadClick = () => {
    // console.log(this.state.projectState);
    // function downloadURI(uri, name) {
    //   var link = document.createElement("a");
    //   link.download = name;
    //   link.href = uri;
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // }
    // if (this.state.projectState) {
    let dataURL = this.state.currentProject.view.toDataURL({ pixelRatio: 1 });
    downloadURI(dataURL, `${this.state.currentProject.name}.png`);
    // }
  };

  handleAddText = text =>
    this.setState({ textsAdded: [...this.state.textsAdded, text] });

  handleContextMenuOptionClick = option => {
    console.log(option);
  };

  render() {
    return (
      <div className="App">
        <AppLayout
          logosURLs={this.state.logosURLs}
          currentProject={this.state.currentProject}
          onStageUpdate={this.updateProject}
          // editorBackground={this.state.currentProject.background}

          // draggedImageURL={this.state.draggedImageURL}
          // onDragEnd={this.handleLogoDrag}
          // onDownloadClick={this.handleDownLoadClick}
          // downloadDisabled={Boolean(!this.state.projectState)}
          // onAddText={this.handleAddText}
          // textsAdded={this.state.textsAdded}
          // handleContextMenuOptionClick={this.handleContextMenuOptionClick}
        />
      </div>
    );
  }
}

export default App;
