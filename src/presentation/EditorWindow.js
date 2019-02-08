import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";
import BackgroundImage from "./BackgroundImage";
import "../styles/EditorWindow.css";

export default class EditorWindow extends Component {
  shouldComponentUpdate = nextProps =>
    Object.values(this.props).some(
      (value, i) => value !== Object.values(nextProps)[i]
    );

  componentDidUpdate = () => this.props.updateStage(this.stageRef);

  render() {
    const {
      textsAdded,
      width,
      height,
      draggedImageURL,
      backgroundImageURL
    } = this.props;
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
          {textsAdded.map((text, i) => (
            <Layer key={text.value + i}>
              <Text
                fill="red"
                text={text.value}
                fontFamily={text.font}
                width={width}
                height={height}
                fontSize={20}
                align="center"
                verticalAlign="middle"
              />
            </Layer>
          ))}
        </Stage>
      </div>
    );
  }
}
