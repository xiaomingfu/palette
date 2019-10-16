import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteStyles";
class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        console.log(this._shades);
        this.state = { format: "hex" };
        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades(palette, filteredColor) {
        //return all shade of allcolors
        let shades = [];
        let colors = palette.colors;
        for (let key in colors) {
            shades = shades.concat(
                colors[key].filter(color => color.id === filteredColor))
        }
        return shades.slice(1);
    }
    changeFormat(val) {
        this.setState({ format: val });
    }
    render() {
        const colorboxes = this._shades.map(c => (
            <ColorBox
                key={c.name}
                name={c.name}
                color={c[this.state.format]}
                showingFullPalette={false}

            />
        ))
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        return (
            <div className={classes.Palette} >
                <Navbar handleChange={this.changeFormat} showAllColor={false} />
                <div className={classes.colors}>{colorboxes}
                    <div className={classes.gobackBtn}>
                        <Link to={`/palette/${id}`}>Go back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}
export default withStyles(styles)(SingleColorPalette);