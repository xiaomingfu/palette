import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",

    },
    container: {
        width: "50%",
        disply: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        disply: "flex",
        width: "100%",
        justifyContent: "space-between"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        disply: "grid",
        gridTemplateColums: "repeat(3, 30%)",
    },
};
class PaletteList extends Component {
    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(p => (
                            <MiniPalette {...p} />))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList);