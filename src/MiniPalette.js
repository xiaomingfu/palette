import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        position: "relative",
        padding: "0.5rem",
        overflow: "hidden",
        border: "solid 1px black",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"

    },
    color: {
        height: "20%",
        width: "25%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    title: {
        color: "black",
        margin: "0",
        paddingTop: "0.6rem",
        display: "flex",
        justifyConent: "space-between",
        alignItems: "center",
        fontSize: "1rem",
        position: "ralative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"

    }
}

function MiniPalette(props) {
    const { classes, emoji, paletteName, colors } = props;
    const miniColorBoxes = colors.map(color => (
        <div
            className={classes.color}
            style={{ backgroundColor: color.color }}
            key={color.name}></div>
    ));
    return (
        <div>
            <div className={classes.root} onClick={props.handleClick}>
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);