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
  static defaultProps = {
    color: "red",
    fontSize: 20,
    shadowOffset: { x: 1, y: 1 },
    shadowOpacity: 0.5
  };

  componentDidMount() {
    this.setState({
      textWidth: this.textRef.getTextWidth(),
      textHeight: this.textRef.getTextHeight()
    });
  }

  onClick = () => this.props.onClick(this.props.text);

  onMouseEnter = () => (document.body.style.cursor = "pointer");

  onMouseLeave = () => (document.body.style.cursor = "default");

  onDragStart = () => this.props.onDrag(this.props.text);

  onDragEnd = () => this.props.onDrag("");

  onShowContextMenu = e => {
    e.evt.preventDefault();
    this.props.onShowContextMenu({
      x: e.evt.pageX - this.props.stageWidth / 2,
      y: e.evt.pageY + 12
    });
  };

  render() {
    return (
      <Layer>
        <Text
          x={this.props.stageWidth / 2 - this.state.textWidth / 2}
          y={this.props.stageHeight / 2 - this.state.textHeight / 2}
          text={this.props.text}
          fontFamily={this.props.font}
          fill={this.props.color}
          fontSize={this.props.fontSize}
          draggable
          onClick={this.onClick}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          shadowOffset={this.props.shadowOffset}
          shadowOpacity={this.props.shadowOpacity}
          shadowEnabled={this.props.shadowEnabled}
          onContextMenu={e => this.onShowContextMenu(e)}
          ref={node => {
            this.textRef = node;
          }}
        />
      </Layer>
    );
  }
}
