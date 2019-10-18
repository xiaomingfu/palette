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
    this.state = { open: false, newPaletteName: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
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
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Add a paletteName
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Add a new Palette Name
          </DialogTitle>
          <DialogContent>
            <ValidatorForm
              onSubmit={() => this.props.handleSubmit(newPaletteName)}
            >
              <TextValidator
                value={newPaletteName}
                onChange={this.handleChange}
                name="newPaletteName"
                validators={["required", "PaletteNameUnique"]}
                errorMessages={[
                  "Palette name is required",
                  "Palette name already taken"
                ]}
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default PaletteMetaForm;
