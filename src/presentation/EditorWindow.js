import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";
import BackgroundImage from "./BackgroundImage";
import "../styles/EditorWindow.css";

export default class EditorWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragged: false
    };
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    Object.values(this.props).some(
      (value, i) => value !== Object.values(nextProps)[i]
    ) ||
    Object.values(this.state).some(
      (value, i) => value !== Object.values(nextState)[i]
    );

  componentDidUpdate = () => this.props.updateStage(this.stageRef);

  toggleIsDragged = () => this.setState({ isDragged: !this.state.isDragged });

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
                draggable
                onDragStart={this.toggleIsDragged}
                onDragEnd={this.toggleIsDragged}
                shadowOffset={{ x: 1, y: 1 }}
                shadowOpacity={0.5}
                shadowEnabled={this.state.isDragged}
              />
            </Layer>
          ))}
        </Stage>
      </div>
    );
  }
}
