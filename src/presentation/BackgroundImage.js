import React, { Component } from "react";
import { Layer, Image } from "react-konva";
import preloadImage from "../helpers/preloadImage";

export default class BackgroundImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  componentDidMount() {
    preloadImage(this.props.image, img => this.setState({ image: img }));
  }

  render() {
    return (
      <Layer>
        <Image
          image={this.state.image}
          onContextMenu={this.props.onContextMenu}
          onClick={this.props.onContextMenu}
        />
      </Layer>
    );
  }
}
