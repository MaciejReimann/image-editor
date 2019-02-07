import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";

export default class BackgroundImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }
  componentDidMount() {
    let img = new window.Image();
    img.setAttribute("crossOrigin", "anonymous"); // see why this is necessary: https://goo.gl/FJD5vg
    img.src = this.props.url;
    img.onload = () => {
      this.setState({ image: img });
    };
  }

  render() {
    return <Image image={this.state.image} />;
  }
}
