import React, { Component } from 'react';
import './Palette.css';
class Palette extends Component {
    render() {
        let colors = this.props.colorsPalette.colors;
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                {/* bouch of color boxes */}
                {colors.map(c =>
                    <div style={{ background: c.color }}>{c.name}</div>)}
                {/* footer */}
            </div>
        );
    }
}

export default Palette;
