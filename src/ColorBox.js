import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
    render() {
        let { color, name } = this.props.color;
        return (
            <CopyToClipboard text={color}>
                <div style={{ background: color }} className="ColorBox">
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-btn">Copy</button>
                    </div>
                    <button className="see-more">More</button>
                </div>
            </CopyToClipboard>
        )
    }
}
export default ColorBox;