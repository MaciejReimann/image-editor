import React, { Component } from "react";
import Unsplash from "unsplash-js";
import Thumbnail from "./Thumbnail";
import SecondaryButton from "../generic/SecondaryButton";
import "../styles/BackgroundMenu.css";

export default class BackgroundMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleInputChange = e => this.setState({ text: e.target.value });

  searchForImages = () => {
    console.log("searching...");
  };

  render() {
    const thumbnails = Array(4)
      .fill()
      .map((_, i) => <Thumbnail cls={"BackgroundThumbnail"} key={i} />);
    return (
      <div className="BackgroundMenu">
        <div className="Header">Select Background</div>
        <div className="Search">
          <input
            onChange={e => this.handleInputChange(e)}
            type="text"
            value={this.state.text}
          />
          <SecondaryButton
            onClick={this.searchForImages}
            label="Search For Images"
          />
        </div>
        <div className="thumbnails">{thumbnails}</div>
        <SecondaryButton
          onClick={this.props.onDeleteBackground}
          label="Delete Background"
        />
      </div>
    );
  }
}
