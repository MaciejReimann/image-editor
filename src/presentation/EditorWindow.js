import React, { Component } from "react";
import { Stage } from "react-konva";
import "../styles/EditorWindow.css";
import hasObjectChanged from "../helpers/hasObjectChanged";
import TextField from "../logic/TextField";
import BackgroundImage from "./BackgroundImage";
import ContextMenu from ".//ContextMenu";

export default class EditorWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textDragged: "",
      imageDragged: null,
      contextMenuPosition: null
    };
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    hasObjectChanged(this.props, nextProps) ||
    hasObjectChanged(this.state, nextState);

  componentDidUpdate = () => this.props.onStageUpdate();

  handleTextDragStart = e => {
    this.setState({ textDragged: e.target.attrs.text });
  };

  handleTextDragEnd = () => {
    this.setState({ textDragged: "" });
  };

  toggleShowingContextMenu = e => {
    this.setState({
      contextMenuPosition: this.state.contextMenuPosition
        ? null
        : { x: e.evt.pageX - this.props.stageWidth / 2, y: e.evt.pageY + 12 }
    });
  };

  handleContextMenuOptionClick = option => {
    console.log(option);
  };

  render() {
    const {
      textsAdded,
      stageWidth,
      stageHeight,
      // draggedImageURL,
      handleContextMenuOptionClick
    } = this.props;

    return (
      <div className="Editor">
        <Stage width={stageWidth} height={stageHeight} className="Editor">
          <BackgroundImage image={this.props.background} />
          {/* {this.props.texts.map((text, i) => (
            <TextField
              stageWidth={stageWidth}
              stageHeight={stageHeight}
              text={text.value}
              fontFamily={text.font}
              draggable
              onShowContextMenu={e => this.toggleShowingContextMenu(e)}
              onDragStart={e => this.handleTextDragStart(e)}
              onDragEnd={this.handleTextDragEnd}
              shadowEnabled={this.state.textDragged === text.value}
              key={text.value + i}
            />
          ))} */}
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
