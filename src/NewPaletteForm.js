import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { arrayMove } from "react-sortable-hoc";
import seedColors from "./seedColors";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import styles from "./styles/NewPaletteFormStyle";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: "",
      open: true,
      currentColor: "teal",
      colors: seedColors[0].colors,
      newColorName: ""
    };

    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ""
    });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(newPalette) {
    newPalette.id = newPalette.paletteName
      .toLocaleLowerCase()
      .replace(/ /g, "-");
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }
  removeColor(name) {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== name)
    });
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };
  clearPalette() {
    this.setState({ colors: [] });
  }

  addRandomColor() {
    const allColor = this.props.palettes.map(p => p.colors).flat();
    let random;
    let randomColor;
    let isDuplicateColor = true;
    const callback = color => color.name === randomColor.name;
    while (isDuplicateColor) {
      random = Math.floor(Math.random() * allColor.length);
      randomColor = allColor[random];
      isDuplicateColor = this.state.colors.some(callback);
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
          handlePaletteClose={this.handlePaletteClose}
          open={open}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearPalette}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.addRandomColor}
                disabled={paletteFull}
                className={classes.button}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              paletteFull={paletteFull}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            onSortEnd={this.onSortEnd}
            colors={colors}
            removeColor={this.removeColor}
            axis="xy"
            distance={20}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
