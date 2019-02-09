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
    shadowOffset: { x: 1, y: 1 },
    shadowOpacity: 0.5
  };

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

  onMouseEnter = () => (document.body.style.cursor = "pointer");
  onMouseLeave = () => (document.body.style.cursor = "default");

  render() {
    return (
      <Layer>
        <Text
          x={this.props.stageWidth / 2 - this.state.textWidth / 2}
          y={this.props.stageHeight / 2 - this.state.textHeight / 2}
          text={this.props.text}
          fontFamily={this.props.font}
          fill={this.props.color}
          fontSize={20}
          draggable
          onDragStart={e => this.props.onDragStart(e)}
          onDragEnd={this.props.onDragEnd}
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
