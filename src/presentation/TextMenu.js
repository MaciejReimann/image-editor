import React, { Component } from "react";
import SecondaryButton from "../generic/SecondaryButton";
import "../styles/TextMenu.css";

export default class TextMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form className="TextMenu">
        <div>Add Text</div>
        <div className="radios">
          <div className="radio">
            <label>
              <input type="radio" value="Arial" checked={false} />
              Arial
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Times New Roman" checked={false} />
              Times New Roman
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="Open Sans" checked={false} />
              Open Sans
            </label>
          </div>
        </div>
        <input type="text" />
        <SecondaryButton label="Add Text" />
      </form>
    );
  }
}
