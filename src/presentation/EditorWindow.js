import React from "react";
import { Component } from "react";

export default class EditorWindow extends Component {
  render() {
    const { width, height } = this.props;
    return (
      <div className="editor">
        <canvas ref="canvas" width={width} height={height} />
      </div>
    );
  }
}
