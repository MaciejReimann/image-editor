import React, { Component } from "react";
import { Layer, Rect, Text } from "react-konva";

export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textWidth: 0,
      textHeight: 0
    };
  }

  componentDidMount() {
    this.setState({
      textWidth: this.textRef.getTextWidth(),
      textHeight: this.textRef.getTextHeight()
    });
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
    const { textWidth, textHeight } = this.state;
    return (
      <Layer>
        <Text
          fill="red"
          text={text}
          fontFamily={font}
          x={width / 2 - textWidth / 2}
          y={height / 2 - textHeight / 2}
          fontSize={20}
          draggable
          onDragStart={e => onDragStart(e)}
          onDragEnd={onDragEnd}
          onMouseOver={e => onMouseOver(e)}
          shadowOffset={{ x: 1, y: 1 }}
          shadowOpacity={0.5}
          shadowEnabled={shadowEnabled}
          onContextMenu={e => this.onShowContextMenu(e)}
          ref={node => {
            this.textRef = node;
          }}
        />
      </Layer>
    );
  }
}
