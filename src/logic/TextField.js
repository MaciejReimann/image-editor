import React, { Component } from "react";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";

export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onShowContextMenu = e => {
    e.evt.preventDefault();
    this.props.onShowContextMenu(e);
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
      <Layer>
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
          onContextMenu={e => this.onShowContextMenu(e)}
        />
      </Layer>
    );
  }
}
