import React, { Component } from "react";
import { Stage } from "react-konva";
import "../styles/EditorWindow.css";
import hasObjectChanged from "../helpers/hasObjectChanged";
import TextContainer from "./TextContainer";
import LogoContainer from "./LogoContainer";
import BackgroundImage from "../presentation/BackgroundImage";
import ContextMenu from "../presentation/ContextMenu";

export default class EditorWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggedItemId: null,
      clickedItemId: null,
      contextMenuPosition: null,
      category: ""
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

  render() {
    const { background, texts, logos } = this.props.projectData;
    const commonProps = {
      stageWidth: this.props.stageWidth,
      stageHeight: this.props.stageHeight,
      onDrag: draggedItemId => this.setState({ draggedItemId }),
      onClick: clickedItemId => this.setState({ clickedItemId }),
      onShowContextMenu: ({ x, y, category }) =>
        this.setState({
          contextMenuPosition: this.state.contextMenuPosition ? null : { x, y },
          category
        })
    };
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
            <TextContainer
              key={text.id}
              id={text.id}
              text={text.text}
              fontFamily={text.fontFamily}
              {...commonProps}
              onDragEnd={this.props.onMoveText}
              shadowEnabled={this.state.draggedItemId === text.id}
            />
          ))}
          {logos.map(logo => (
            <LogoContainer
              key={logo.id}
              id={logo.id}
              image={logo.url}
              {...commonProps}
              onDragEnd={this.props.onMoveLogo}
              shadowEnabled={this.state.draggedItemId === logo.id}
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
            onOptionClick={
              (this.state.category === "text" &&
                this.props.onEditText(this.state.clickedItemId)) ||
              (this.state.category === "logo" &&
                this.props.onEditLogo(this.state.clickedItemId))
            }
          />
        )}
      </div>
    );
  }
}
