import React, { Component } from "react";
import SecondaryButton from "../generic/SecondaryButton";
import RadioInput from "../generic/RadioInput";
import "../styles/TextMenu.css";

export default class TextMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      fontFamily: "Arial",
      availableFonts: ["Arial", "Times New Roman", "Open Sans"]
    };
  }

  handleSubmit = e => {
    const { text, fontFamily } = this.state;
    e.preventDefault();
    if (text.trim().length) {
      this.props.onSubmit({ text, fontFamily });
      this.setState({ text: "" });
    }
  };

  handleRadioChange = e => this.setState({ fontFamily: e.target.value });

  handleInputChange = e => this.setState({ text: e.target.value });

  render() {
    const { text, fontFamily, availableFonts } = this.state;
    return (
      <form className="TextMenu" onSubmit={this.handleSubmit}>
        <div>Add Text</div>
        <input onChange={this.handleInputChange} type="text" value={text} />
        <div className="radios">
          {availableFonts.map(font => (
            <RadioInput
              value={font}
              onChange={this.handleRadioChange}
              checked={fontFamily === font}
              key={font}
            />
          ))}
        </div>
        <SecondaryButton onClick={this.handleSubmit} label="Add Text" />
      </form>
    );
  }
}
