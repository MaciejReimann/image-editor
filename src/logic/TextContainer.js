import React, { Component } from "react";
import { Layer, Text } from "react-konva";

export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textWidth: 0,
      textHeight: 0
    };
  }
  static defaultProps = {
    fill: "red",
    fontSize: 20,
    shadowOffset: { x: 1.5, y: 1.5 },
    shadowOpacity: 0.5
  };

  componentDidMount() {
    this.setState({
      textWidth: this.ref.getTextWidth(),
      textHeight: this.ref.getTextHeight()
    });
  }

  render() {
    return (
      <Layer>
        <Text
          id={this.props.id}
          x={
            this.props.x || this.props.stageWidth / 2 - this.state.textWidth / 2
          }
          y={
            this.props.y ||
            this.props.stageHeight / 2 - this.state.textHeight / 2
          }
          text={this.props.text}
          fontFamily={this.props.fontFamily}
          fill={this.props.fill}
          fontSize={this.props.fontSize}
          draggable
          onDragStart={() => this.props.onDrag(this.props.id)}
          onDragEnd={() => {
            this.props.onDragEnd({
              ...this.props,
              x: this.ref.attrs.x,
              y: this.ref.attrs.y
            });
            this.props.onDrag(null);
          }}
          onClick={() => this.props.onClick(this.props.id, this.ref)}
          onMouseEnter={() => (document.body.style.cursor = "pointer")}
          onMouseLeave={() => (document.body.style.cursor = "default")}
          shadowOffset={this.props.shadowOffset}
          shadowOpacity={this.props.shadowOpacity}
          shadowEnabled={this.props.shadowEnabled}
          onContextMenu={e => {
            e.evt.preventDefault();
            this.props.onShowContextMenu({
              x: e.evt.pageX - this.props.stageWidth / 2,
              y: e.evt.pageY + 12,
              category: "text"
            });
          }}
          ref={node => {
            this.ref = node;
          }}
        />
      </Layer>
    );
  }
}
