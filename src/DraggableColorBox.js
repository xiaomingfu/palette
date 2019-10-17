import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    display: "inline-block",
    width: "20%",
    height: "25%",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer"
  }
};
function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    ></div>
  );
}

export default withStyles(styles)(DraggableColorBox);
