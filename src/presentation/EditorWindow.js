import React, { Component } from "react";
import { Stage } from "react-konva";
import "../styles/EditorWindow.css";
import hasObjectChanged from "../helpers/hasObjectChanged";
import TextField from "../logic/TextField";
import LogoContainer from "../logic/LogoContainer";
import BackgroundImage from "./BackgroundImage";
import ContextMenu from ".//ContextMenu";

export default class EditorWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedTextId: null,
      clickedTextId: null,
      contextMenuPosition: null
    };
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    hasObjectChanged(this.props, nextProps) ||
    hasObjectChanged(this.state, nextState);

  componentDidUpdate = prevProps => {
    if (hasObjectChanged(prevProps, this.props)) {
      this.setState({ contextMenuPosition: null });
    }
    this.props.onStageUpdate(this.stageRef);
  };

  handleTextClick = (clickedTextId, el) => {
    console.log(el);
    this.setState({ clickedTextId });
  };

  handleDrag = draggedTextId => this.setState({ draggedTextId });

  toggleShowingContextMenu = ({ x, y }) =>
    this.setState({
      contextMenuPosition: this.state.contextMenuPosition ? null : { x, y }
    });

  render() {
    const { background, texts, logos } = this.props.projectData;
    return (
      <div className="Editor">
        <Stage
          className="Editor"
          width={this.props.stageWidth}
          height={this.props.stageHeight}
          ref={node => {
            this.stageRef = node;
          }}
        >
          <BackgroundImage
            image={background}
            onContextMenu={() => this.setState({ contextMenuPosition: null })}
          />
          {texts.map((text, i) => (
            <TextField
              id={text.id}
              stageWidth={this.props.stageWidth}
              stageHeight={this.props.stageHeight}
              text={text.value}
              font={text.font}
              draggable
              onClick={this.handleTextClick}
              onShowContextMenu={this.toggleShowingContextMenu}
              onDrag={this.handleDrag}
              shadowEnabled={this.state.draggedTextId === text.id}
              key={text.value + i}
            />
          ))}
          {logos.map((logo, i) => (
            <LogoContainer logo={logo} key={i} />
          ))}
        </Stage>
        {this.state.contextMenuPosition && (
          <ContextMenu
            options={[{ name: "Delete" }]}
            position={{
              x: this.state.contextMenuPosition.x,
              y: this.state.contextMenuPosition.y
            }}
            onOptionClick={this.props.contextMenu(this.state.clickedTextId)}
          />
        )}
      </div>
    );
  }
}
