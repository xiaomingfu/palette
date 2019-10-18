import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newPaletteName: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("PaletteNameUnique", value =>
      this.props.palettes.every(
        palette => palette.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  render() {
    const { open, newPaletteName } = this.state;
    const { handlePaletteClose } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={handlePaletteClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Give a Palette Name</DialogTitle>
          <ValidatorForm
            onSubmit={() => this.props.handleSubmit(newPaletteName)}
          >
            <DialogContent>
              <DialogContentText>
                Please enter a name for the palette, make sure it's unique.
              </DialogContentText>
              <TextValidator
                value={newPaletteName}
                onChange={this.handleChange}
                margin="normal"
                fullWidth
                placeholder="Palette name"
                name="newPaletteName"
                validators={["required", "PaletteNameUnique"]}
                errorMessages={[
                  "Palette name is required",
                  "Palette name already taken"
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
              <Button onClick={handlePaletteClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}
export default PaletteMetaForm;
