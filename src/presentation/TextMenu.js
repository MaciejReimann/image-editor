import React, { Component } from "react";

import "../styles/TextMenu.css";

export default class TextMenu extends Component {
  render() {
    return (
      <div className="TextMenu">
        <div>Add Text</div>
        <input type="text" />
      </div>
    );
  }
}
