import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";
import BackgroundImage from "./BackgroundImage";
import "../styles/EditorWindow.css";

export default class EditorWindow extends Component {
  componentWillUpdate() {
    this.props.updateStage(this.stageRef);
    // console.log(this.stageRef);
  }
  render() {
    const { width, height, draggedImageURL, backgroundImageURL } = this.props;

    return (
      <div className="editor">
        <Stage
          width={width}
          height={height}
          ref={node => {
            this.stageRef = node;
          }}
          className="Editor"
        >
          <Layer>
            <BackgroundImage url={backgroundImageURL} />
          </Layer>
          <Layer>
            <Text text="Some text on canvas" fontSize={15} />
          </Layer>
        </Stage>
      </div>
    );
  }
}
