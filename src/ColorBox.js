import React, { Component } from 'react';
import './ColorBox.css';
class ColorBox extends Component {
    render() {
        let { color, name } = this.props.color;
        return (
            <div style={{ background: color }} className="ColorBox">
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-btn">Copy</button>
                </div>
                <button className="see-more">More</button>
            </div>
        )
    }
}
export default ColorBox;