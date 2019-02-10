import React, { Component } from "react";
import { Layer, Image } from "react-konva";
import preloadImage from "../helpers/preloadImage";

export default class LogoField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    width: 100,
    height: 100,
    shadowOffset: { x: 1, y: 1 },
    shadowOpacity: 0.5
  };

  componentDidMount() {
    preloadImage(this.props.image, img => this.setState({ image: img }));
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
        <Image
          image={this.state.image}
          width={this.props.width}
          height={this.props.height}
          x={this.props.x || 0}
          y={this.props.y || 0}
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
              y: e.evt.pageY + this.props.height / 2 + 5
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
