import React, { Component } from "react";

import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";

class NewPaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { classes, open, handleDrawerOpen } = this.props;
    return (
      <div>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm
              onSubmit={() =>
                this.props.handleSubmit(this.state.newPaletteName)
              }
            >
              <TextValidator
                value={this.state.newPaletteName}
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
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Go Back
                </Button>
              </Link>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default NewPaletteFormNav;
