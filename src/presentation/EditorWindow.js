import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import "../styles/EditorWindow.css";

import TextField from "../logic/TextField";
import BackgroundImage from "./BackgroundImage";

export default class EditorWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textDragged: ""
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

  handleHoverText = e => console.log(e.target.textWidth);

  handleTextDragStart = e => {
    this.setState({ textDragged: e.target.attrs.text });
  };

  handleTextDragEnd = () => {
    this.setState({ textDragged: "" });
  };

  render() {
    const {
      textsAdded,
      width,
      height,
      // draggedImageURL,
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
          <Layer>
            {textsAdded.map((text, i) => (
              <TextField
                width={width}
                height={height}
                text={text.value}
                fontFamily={text.font}
                draggable
                onDragStart={e => this.handleTextDragStart(e)}
                onDragEnd={this.handleTextDragEnd}
                onMouseOver={e => this.handleHoverText(e)}
                shadowOffset={{ x: 1, y: 1 }}
                shadowOpacity={0.5}
                shadowEnabled={this.state.textDragged === text.value}
                key={text.value + i}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    );
  }
}
