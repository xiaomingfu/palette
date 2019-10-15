import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
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
            <ColorBox key={c.id} name={c.name} color={c[this.state.format]} showLink={false} />
        ))
        const { paletteName, emoji } = this.props.palette;
        return (
            <div className="Palette" >
                <Navbar handleChange={this.changeFormat} showAllColor={false} />
                <div className="Palette-colors">{colorboxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}
export default SingleColorPalette;