import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = { newPaletteName: "", open: true, stage: "form" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  showEmojiPicker = () => {
    this.setState({ stage: "emoji" });
  };
  savePalette = emoji => {
    this.props.handleSubmit({
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    });
    this.setState({ stage: "" });
  };
  componentDidMount() {
    ValidatorForm.addValidationRule("PaletteNameUnique", value =>
      this.props.palettes.every(
        palette => palette.paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  render() {
    const { newPaletteName, stage } = this.state;
    const { hideForm } = this.props;
    return (
      <div>
        <Dialog open={stage === "emoji"}>
          <DialogTitle id="form-dialog-title">Give a Emoji Name</DialogTitle>
          <Picker onSelect={this.savePalette} title="Pick a emoji" />
        </Dialog>
        <Dialog
          open={stage === "form"}
          aria-labelledby="form-dialog-title"
          onClose={hideForm}
        >
          <DialogTitle id="form-dialog-title">Give a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
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
                Save
              </Button>
              <Button onClick={hideForm} color="primary">
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
