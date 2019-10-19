import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotoIcon from "@material-ui/icons/AddToPhotos";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyle";
class NewPaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }
  showForm() {
    this.setState({ formShowing: true });
  }
  hideForm() {
    this.setState({ formShowing: false });
  }
  render() {
    const {
      classes,
      open,
      handleDrawerOpen,
      handleSubmit,
      palettes
    } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, { [classes.hide]: open })}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" noWrap color="inherit">
              Create A palette
            </Typography>
          </Toolbar>

          <div className={classes.navbtns}>
            <Link to="/">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={this.showForm}
              className={classes.button}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaForm
            handleSubmit={handleSubmit}
            palettes={palettes}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}
export default withStyles(styles)(NewPaletteFormNav);
