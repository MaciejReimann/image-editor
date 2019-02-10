import React, { Component } from "react";
import { Stage } from "react-konva";
import "../styles/EditorWindow.css";
import hasObjectChanged from "../helpers/hasObjectChanged";
import TextField from "../logic/TextField";
import LogoField from "../logic/LogoField";
import BackgroundImage from "./BackgroundImage";
import ContextMenu from "./ContextMenu";

export default class EditorWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedFieldId: null,
      clickedFieldId: null,
      contextMenuPosition: null
    };
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    hasObjectChanged(this.props.projectData, nextProps.projectData) ||
    hasObjectChanged(this.state, nextState);

  componentDidUpdate = prevProps => {
    if (hasObjectChanged(prevProps, this.props)) {
      this.setState({ contextMenuPosition: null });
    }
    this.props.onStageUpdate(this.stageRef);
  };

  handleFieldClick = (clickedFieldId, el) => {
    console.log(el);
    this.setState({ clickedFieldId });
  };

  handleDrag = draggedFieldId => this.setState({ draggedFieldId });

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
          {texts.map(text => (
            <TextField
              id={text.id}
              text={text.text}
              fontFamily={text.fontFamily}
              stageWidth={this.props.stageWidth}
              stageHeight={this.props.stageHeight}
              draggable
              onDrag={this.handleDrag}
              onDragEnd={this.props.onMoveText}
              onClick={this.handleFieldClick}
              onShowContextMenu={this.toggleShowingContextMenu}
              shadowEnabled={this.state.draggedFieldId === text.id}
              key={text.id}
            />
          ))}
          {logos.map(logo => (
            <LogoField
              id={logo.id}
              image={logo.url}
              key={logo.id}
              draggable
              onDrag={this.handleDrag}
              onDragEnd={this.props.onMoveLogo}
              // onClick={this.handleFieldClick}
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
            onOptionClick={this.props.contextMenu(this.state.clickedFieldId)}
          />
        )}
      </div>
    );
  }
}
