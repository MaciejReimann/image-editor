import React from "react";
import { Component } from "react";

export default class EditorWindow extends Component {
  render() {
    const { width, height, draggedImageURL } = this.props;
    console.log(draggedImageURL);
    return (
      <div className="editor">
        <canvas
          onDragEnter={e => console.log(draggedImageURL)}
          ref="canvas"
          width={width}
          height={height}
        />
      </div>
    );
  }
}
