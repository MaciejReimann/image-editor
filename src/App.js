import React, { Component } from "react";
import AppLayout from "./presentation/AppLayout";
import downloadURI from "./helpers/downloadURI";
import preloadImage from "./helpers/preloadImage";
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
      projectData: {
        name: "MyProject",
        background: "/assets/empty_background.bmp",
        texts: [],
        images: []
      },
      projectView: null,
      draggedImageURL: ""
    };
  }

  updateProjectView = data => {
    console.log(data);
    // this.setState({ projectData: data });
  };

  handleLogoDrag = (e, url) => {
    // this.setState({ draggedImageURL: url });
    // console.log(e.target);
  };

  handleDownLoadClick = () => {
    if (this.state.projectView) {
      let dataURL = this.state.projectView.toDataURL({ pixelRatio: 1 });
      downloadURI(dataURL, `${this.state.projectData.name}.png`);
    }
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
          projectData={this.state.projectData}
          onStageUpdate={this.updateProjectView}
          // draggedImageURL={this.state.draggedImageURL}
          // onDragEnd={this.handleLogoDrag}
          onDownloadClick={this.handleDownLoadClick}
          downloadDisabled={Boolean(!this.state.projectState)}
          // onAddText={this.handleAddText}
          // textsAdded={this.state.textsAdded}
          // handleContextMenuOptionClick={this.handleContextMenuOptionClick}
        />
      </div>
    );
  }
}

export default App;
