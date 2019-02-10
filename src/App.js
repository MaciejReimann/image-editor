import React, { Component } from "react";
import { logosURLs, emptyBackgroundURL } from "./assets";
import { downloadURI, deleteItemById, lastItemOf } from "./helpers";
import AppLayout from "./presentation/AppLayout";

import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logosURLs,
      projectData: {
        name: "MyProject",
        background: emptyBackgroundURL,
        texts: [],
        logos: []
      },
      projectView: null
    };
  }

  handleAddingText = newText => {
    const { texts } = this.state.projectData;
    this.setState({
      projectData: {
        ...this.state.projectData,
        texts: [
          ...texts,
          {
            ...newText,
            id: lastItemOf(texts) ? lastItemOf(texts).id + 1 : 0
          }
        ]
      }
    });
  };

  handleEditingText = textId => option => {
    if (option === "Delete") {
      this.setState({
        projectData: {
          ...this.state.projectData,
          texts: deleteItemById(this.state.projectData.texts, textId)
        }
      });
    } // place for other context menu options (EDIT? RESIZE?)
  };

  handleAddingLogo = newLogo =>
    this.setState({
      projectData: {
        ...this.state.projectData,
        logos: [...this.state.projectData.logos, newLogo]
      }
    });

  updateProjectView = projectView => this.setState({ projectView });

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
          appData={{
            logosURLs: this.state.logosURLs,
            projectData: this.state.projectData
          }}
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
