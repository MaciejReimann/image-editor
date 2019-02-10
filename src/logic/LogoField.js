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
          draggable
          onDragStart={() => this.props.onDrag(this.props.id)}
          onDragEnd={() => {
            this.props.onDragEnd({
              ...this.props,
              x: this.textRef.attrs.x,
              y: this.textRef.attrs.y
            });
            this.props.onDrag(null);
          }}
          //
          // onClick={() => this.props.onClick(this.props.id, this.textRef)}
          // onMouseEnter={() => (document.body.style.cursor = "pointer")}
          // onMouseLeave={() => (document.body.style.cursor = "default")}
          ref={node => {
            this.textRef = node;
          }}
        />
      </Layer>
    );
  }
}
