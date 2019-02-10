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
      textDragged: "",
      contextMenuPosition: null
    };
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    hasObjectChanged(this.props, nextProps) ||
    hasObjectChanged(this.state, nextState); // this is unnnecessary once text and image position is written into a model

  componentDidUpdate = () => this.props.onStageUpdate(this.stageRef);

  handleTextClick = text => {
    console.log(text);
  };

  handleDrag = textDragged => this.setState({ textDragged });

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
          <BackgroundImage image={background} />
          {texts.map((text, i) => (
            <TextField
              stageWidth={this.props.stageWidth}
              stageHeight={this.props.stageHeight}
              text={text.value}
              font={text.font}
              draggable
              onClick={this.handleTextClick}
              onShowContextMenu={this.toggleShowingContextMenu}
              onDrag={this.handleDrag}
              shadowEnabled={this.state.textDragged === text.value}
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
            onOptionClick={textClicked => this.props.contextMenu(textClicked)()}
          />
        )}
      </div>
    );
  }
}
