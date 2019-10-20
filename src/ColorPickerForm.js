import React, { Component } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerFormStyle";

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
    const { paletteFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm
          onSubmit={this.handleSubmit}
          ref="form"
          instantValidate={false}
        >
          <TextValidator
            className={classes.colorNameInput}
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            margin="normal"
            variant="filled"
            placeholder="Color Name"
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
            className={classes.addColor}
          >
            {paletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
export default withStyles(styles)(ColorPickerForm);
