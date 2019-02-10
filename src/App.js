import React, { Component } from "react";
import { logosURLs, emptyBackgroundURL } from "./assets";
import {
  downloadURI,
  deleteItemById,
  updateItemById,
  lastItemOf
} from "./helpers";
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

  handleAdd = (category, name) => newItem => {
    this.setState({
      projectData: {
        ...this.state.projectData,
        [name]: [
          ...category,
          {
            ...newItem,
            id: lastItemOf(category) ? lastItemOf(category).id + 1 : name
          }
        ]
      }
    });
  };

  handleMove = (category, name) => item => {
    this.setState({
      projectData: {
        ...this.state.projectData,
        [name]: updateItemById(category, item)
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
          onAddText={this.handleAdd(this.state.projectData.texts, "texts")}
          onAddLogo={this.handleAdd(this.state.projectData.logos, "logos")}
          //
          onMoveText={this.handleMove(this.state.projectData.texts, "texts")}
          onMoveLogo={this.handleMove(this.state.projectData.logos, "logos")}
          //
          contextMenu={this.handleEditingText}
        />
      </div>
    );
  }
}

export default App;
