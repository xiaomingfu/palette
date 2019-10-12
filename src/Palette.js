import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import { generatePalette } from './colorHelper';
import seedColors from './seedColors';
class Palette extends Component {
    render() {
        const colorBoxes = this.props.palette.colors.map(c => (
            <ColorBox color={c.color} key={c.name} name={c.name} />
        ));
        return (
            <div className="Palette" >
                {console.log(generatePalette(seedColors[4]))}
                {/* Navbar goes here */}
                {/* bouch of color boxes */}
                <div className="Palette-colors" >
                    {colorBoxes}
                </div>
                {/* footer */}
            </div >
        );
    }
}

export default Palette;
