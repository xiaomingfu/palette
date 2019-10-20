import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPaletteStyle";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.openDialog = this.openDialog.bind(this);
  }

  openDialog(evt) {
    evt.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  render() {
    const { classes, emoji, paletteName, colors, handleClick } = this.props;
    const miniColorBoxes = colors.map(color => (
      <div
        className={classes.color}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));

    return (
      <div className={classes.root} onClick={handleClick}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            style={{ transition: "all 0.3s ease-in-out" }}
            onClick={this.openDialog}
          />
        </div>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <div className={classes.title}>
          <h5>{paletteName}</h5>
          <span className={classes.emoji}>{emoji}</span>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(MiniPalette);
