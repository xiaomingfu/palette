import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
class Palette extends Component {
    render() {
        const colorBoxes = this.props.colorsPalette.colors.map(c => (
            <ColorBox color={c} key={c.name} />
        ));
        return (
            <div className="Palette" >
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
