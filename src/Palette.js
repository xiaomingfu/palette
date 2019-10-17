import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import styles from "./styles/PaletteStyles";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/core/styles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { level, format } = this.state;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = colors[level].map(c => (
      <ColorBox
        color={c[format]}
        key={c.id}
        name={c.name}
        url={`/palette/${id}/${c.id}`}
        showingFullPalette={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showAllColor
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
