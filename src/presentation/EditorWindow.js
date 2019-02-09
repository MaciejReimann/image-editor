import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import "../styles/EditorWindow.css";

import TextField from "../logic/TextField";
import BackgroundImage from "./BackgroundImage";
import ContextMenu from ".//ContextMenu";

export default class EditorWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textDragged: "",
      contextMenuPosition: null
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

  toggleShowingContextMenu = e => {
    console.log(e.evt);

    this.setState({
      contextMenuPosition: this.state.contextMenuPosition
        ? null
        : { x: e.evt.pageX - this.props.width / 2, y: e.evt.pageY + 12 }
    });
  };

  handleContextMenuOptionClick = option => {
    console.log(option);
  };

  render() {
    const {
      textsAdded,
      width,
      height,
      // draggedImageURL,
      backgroundImageURL,
      handleContextMenuOptionClick
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
            <TextField
              width={width}
              height={height}
              text={text.value}
              fontFamily={text.font}
              draggable
              onShowContextMenu={e => this.toggleShowingContextMenu(e)}
              onDragStart={e => this.handleTextDragStart(e)}
              onDragEnd={this.handleTextDragEnd}
              onMouseOver={e => this.handleHoverText(e)}
              shadowOffset={{ x: 1, y: 1 }}
              shadowOpacity={0.5}
              shadowEnabled={this.state.textDragged === text.value}
              key={text.value + i}
            />
          ))}
        </Stage>
        {this.state.contextMenuPosition && (
          <ContextMenu
            options={[{ name: "Delete" }]}
            position={{
              x: this.state.contextMenuPosition.x,
              y: this.state.contextMenuPosition.y
            }}
            onOptionClick={handleContextMenuOptionClick}
          />
        )}
      </div>
    );
  }
}
