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
    <div>
      <div className={classes.root} onClick={props.handleClick}>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
