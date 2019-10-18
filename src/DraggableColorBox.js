import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
const styles = {
  root: {
    display: "inline-block",
    width: "20%",
    height: "25%",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer"
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    }
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};
function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <span className={classes.deleteIcon}>
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
