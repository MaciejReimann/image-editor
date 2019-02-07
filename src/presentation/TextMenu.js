import React, { Component } from "react";
import SecondaryButton from "../generic/SecondaryButton";
import RadioInput from "../generic/RadioInput";
import "../styles/TextMenu.css";

export default class TextMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtedText: "",
      fontSelected: "Arial",
      availableFonts: ["Arial", "Times New Roman", "Open Sans"]
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputtedText.trim().length) {
      this.props.textInputtedIs(this.state.inputtedText);
      this.setState({ inputtedText: "" });
    }
  };

  handleRadioChange = e => this.setState({ fontSelected: e.target.value });

  handleInputChange = e => this.setState({ inputtedText: e.target.value });

  render() {
    const { inputtedText, fontSelected, availableFonts } = this.state;
    return (
      <form className="TextMenu" onSubmit={this.handleSubmit}>
        <div>Add Text</div>
        <input
          onChange={this.handleInputChange}
          type="text"
          value={inputtedText}
        />
        <div className="radios">
          {availableFonts.map(font => (
            <RadioInput
              value={font}
              onChange={this.handleRadioChange}
              checked={fontSelected === font}
              key={font}
            />
          ))}
        </div>
        <SecondaryButton onClick={this.handleSubmit} label="Add Text" />
      </form>
    );
  }
}
