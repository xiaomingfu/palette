import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPaletteStyle";

function MiniPalette(props) {
  const { classes, emoji, paletteName, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.color}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        <h5>{paletteName}</h5>
        <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
