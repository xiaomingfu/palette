import React, { Component } from "react";
import NewPaletteFormNav from "./NewPaletteFormNav";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});
class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currentColor: "teal",
      colors: this.props.palettes[0].colors,
      newColorName: ""
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("ColorNameUnique", value => {
      for (let color of this.state.colors) {
        if (color.name.toLowerCase() === value.toLowerCase()) {
          return false;
        }
      }
      return true;
    });
    ValidatorForm.addValidationRule("ColorUnique", value =>
      this.state.colors.every(({ color }) => color !== this.state.currentColor)
    );
    ValidatorForm.addValidationRule("PaletteNameUnique", value =>
      this.props.palettes.every(palette => palette.paletteName !== value)
    );
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  addNewColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ""
    });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(newPaletteName) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLocaleLowerCase().replace(/ /g, "-"),
      colors: this.state.colors
    };
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
    const random = Math.floor(Math.random() * allColor.length);
    this.setState({ colors: [...this.state.colors, allColor[random]] });
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <NewPaletteFormNav
          palettes={palettes}
          classes={classes}
          open={open}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
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
          <Typography variant="h4">Design Your Palette</Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.clearPalette}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addRandomColor}
              disabled={paletteFull}
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              value={this.state.newColorName}
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
              style={{ backgroundColor: this.state.currentColor }}
            >
              {paletteFull ? "Palette Full" : "Add Color"}
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            onSortEnd={this.onSortEnd}
            colors={this.state.colors}
            removeColor={this.removeColor}
            axis="xy"
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
