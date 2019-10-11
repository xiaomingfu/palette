import React, { Component } from 'react';
import './ColorBox.css';
class ColorBox extends Component {
    render() {
        let { color, name } = this.props.color;
        return (
            <div style={{ background: color }} className="ColorBox">
                <span>{name}</span>
            </div>
        )
    }
}
export default ColorBox;