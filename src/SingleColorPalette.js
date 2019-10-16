import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colors: {
        height: "90%",
    },
    gobackBtn: {
        display: "inline-block",
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-3.5px",
        opacity: "1",
        transition: "0.5s",
        background: "black",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline - block",
            background: "rgba(255, 255, 255, 0.5)",
            top: "50%",
            left: "50%",
            marginTop: "-20px",
            marginLeft: "-50px",
            textAlign: "center",
            outline: "none",
            fontSize: "1rem",
            textTransform: "uppercase ",
            border: "none",
            textDecoration: "none",
        }
    }
}
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