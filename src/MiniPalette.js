import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    main: {
        backgroundColor: "pink",
        border: "black 1px solid"
    },
    secondary: {
        backgroundColor: "blue",
        "& h1": {
            color: "yellow",
        }
    }
}
function MiniPalette(props) {
    const { classes } = props;
    return (
        <div>
            <h1 className={classes.main}>MiniPalette</h1>
            <div className={classes.secondary}>
                <h1>Second</h1>
            </div>
        </div>

    )
}

export default withStyles(styles)(MiniPalette);