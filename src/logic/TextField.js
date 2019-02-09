import React, { Component } from "react";

import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";

export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingContextMenu: false
    };
  }

  toggleShowingContextMenu = e => {
    e.evt.preventDefault();
    this.setState({ isShowingContextMenu: !this.state.isShowingContextMenu });
    console.log("rightclick", e);
  };
  render() {
    const {
      text,
      font,
      width,
      height,
      onDragStart,
      onDragEnd,
      onMouseOver,
      shadowEnabled
    } = this.props;
    return (
      <Text
        fill="red"
        text={text}
        fontFamily={font}
        x={width / 2}
        y={height / 2}
        fontSize={20}
        draggable
        onDragStart={e => onDragStart(e)}
        onDragEnd={onDragEnd}
        onMouseOver={e => onMouseOver(e)}
        shadowOffset={{ x: 1, y: 1 }}
        shadowOpacity={0.5}
        shadowEnabled={shadowEnabled}
        onContextMenu={e => this.toggleShowingContextMenu(e)}
      />
    );
  }
}
