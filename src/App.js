import React, { Component } from "react";
import { logosURLs, emptyBackgroundURL } from "./assets";
import {
  downloadURI,
  deleteItemById,
  updateItemById,
  lastItemOf
} from "./helpers";
import AppLayout from "./presentation/AppLayout";
import saveToDB from "./db/saveToDB";
import "./styles/App.css";

export default class App extends Component {
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

  handleEdit = (category, name) => item => option => {
    if (option === "Delete") {
      this.setState({
        projectData: {
          ...this.state.projectData,
          [name]: deleteItemById(category, item)
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
          // TODO: "texts" / "logos" could be possibly passed as arguments
          // lower down, when there is a component with "category" in its state
          onAddText={this.handleAdd(this.state.projectData.texts, "texts")}
          onAddLogo={this.handleAdd(this.state.projectData.logos, "logos")}
          //
          onMoveText={this.handleMove(this.state.projectData.texts, "texts")}
          onMoveLogo={this.handleMove(this.state.projectData.logos, "logos")}
          //
          onEditText={this.handleEdit(this.state.projectData.texts, "texts")}
          onEditLogo={this.handleEdit(this.state.projectData.logos, "logos")}
          //
          db={{
            saveToDB
          }}
        />
      </div>
    );
  }
}
