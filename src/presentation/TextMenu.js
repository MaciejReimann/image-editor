import React, { Component } from "react";
import SecondaryButton from "../generic/SecondaryButton";
import "../styles/TextMenu.css";

export default class TextMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtedText: "",
      fontSelected: ""
    };
  }
  render() {
    return (
      <form className="TextMenu">
        <div>Add Text</div>
        <div className="radios">
          <div className="radio">
            <label>
              <input
                onChange={e => this.setState({ fontSelected: e.target.value })}
                type="radio"
                value="Arial"
                checked={this.state.fontSelected === "Arial"}
              />
              Arial
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                onChange={e => this.setState({ fontSelected: e.target.value })}
                type="radio"
                value="Times New Roman"
                checked={this.state.fontSelected === "Times New Roman"}
              />
              Times New Roman
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                onChange={e => this.setState({ fontSelected: e.target.value })}
                type="radio"
                value="Open Sans"
                checked={this.state.fontSelected === "Open Sans"}
              />
              Open Sans
            </label>
          </div>
        </div>
        <input
          onChange={e => this.setState({ inputtedText: e.target.value })}
          type="text"
        />
        <SecondaryButton label="Add Text" />
      </form>
    );
  }
}
