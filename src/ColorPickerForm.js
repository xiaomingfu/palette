import React, { Component } from "react";

import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "teal",
      newColorName: ""
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("ColorNameUnique", value => {
      for (let color of this.props.colors) {
        if (color.name.toLowerCase() === value.toLowerCase()) {
          return false;
        }
      }
      return true;
    });
    ValidatorForm.addValidationRule("ColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }
  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    const { paletteFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={["required", "ColorNameUnique", "ColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "color name must be unique",
              "Color must be unique"
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={paletteFull}
            style={{ backgroundColor: currentColor }}
          >
            {paletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
export default ColorPickerForm;
