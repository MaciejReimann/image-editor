import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";
import "../styles/EditorWindow.css";

export default class EditorWindow extends Component {
  render() {
    const { width, height, draggedImageURL } = this.props;
    console.log(draggedImageURL);
    return (
      <div className="editor">
        <Stage
          className="Editor"
          onDragEnter={e => console.log(draggedImageURL)}
          width={width}
          height={height}
        >
          <Layer>
            <Text text="Some text on canvas" fontSize={15} />
          </Layer>
        </Stage>
      </div>
    );
  }
}
