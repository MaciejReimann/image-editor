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
      projectData: {
        name: "MyProject",
        background: "/assets/empty_background.bmp",
        texts: [],
        logos: []
      },
      projectView: null
    };
  }

  handleAddingText = newText =>
    this.setState({
      projectData: {
        ...this.state.projectData,
        texts: [...this.state.projectData.texts, newText]
      }
    });

  handleEditingText = option => {
    if (option === "Delete") {
      console.log(option);
    }
  };

  handleAddingLogo = newLogo =>
    this.setState({
      projectData: {
        ...this.state.projectData,
        logos: [...this.state.projectData.logos, newLogo]
      }
    });

  updateProjectView = view => {
    this.setState({ projectView: view });
  };

  handleDownLoadClick = () => {
    if (this.state.projectView) {
      let dataURL = this.state.projectView.toDataURL({ pixelRatio: 1 });
      downloadURI(dataURL, `${this.state.projectData.name}.png`);
    }
  };

  render() {
    return (
      <div className="App">
        <AppLayout
          logosURLs={this.state.logosURLs}
          projectData={this.state.projectData}
          onUpdateProjectView={this.updateProjectView}
          download={{
            disabled: Boolean(!this.state.projectView),
            onClick: this.handleDownLoadClick
          }}
          onAddLogo={this.handleAddingLogo}
          onAddText={this.handleAddingText}
          contextMenu={this.handleEditingText}
        />
      </div>
    );
  }
}

export default App;
