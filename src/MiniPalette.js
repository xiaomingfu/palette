import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        position: "relative",
        padding: "0.5rem",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "grey",
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
    const { classes, colors, emoji, paletteName } = props;
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.colors} />
            </div>
            <div className={classes.title}>
                {paletteName}
            </div>
            <div className={classes.emoji}>{emoji}</div>
        </div>

    )
}

export default withStyles(styles)(MiniPalette);