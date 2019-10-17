import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteListStyle.js";
import MiniPalette from './MiniPalette';
class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { palettes, classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/new">create new palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map((p, idx) => (
                            <MiniPalette {...p} key={idx} handleClick={() => this.goToPalette(p.id)} />))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList);