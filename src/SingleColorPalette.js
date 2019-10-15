import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        console.log(this._shades)
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
    };
    render() {
        const colorboxes = this._shades.map(c => (
            <ColorBox key={c.id} name={c.name} color={c.hex} showLink={false} />
        ))
        return (
            <div className="Palette" >
                <h1>Single Color Palette</h1>
                <div className="Palette-colors">{colorboxes}</div>
            </div>
        )
    }
}
export default SingleColorPalette;