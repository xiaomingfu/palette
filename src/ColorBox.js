import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.handleCopy = this.handleCopy.bind(this);
    }
    handleCopy() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        })
    }
    render() {
        const { color, name, url, showLink } = this.props;
        const { copied } = this.state;
        const isDarkcolor = chroma(color).luminance() <= 0.07;
        const isLightcolor = chroma(color).luminance() >= 0.6;
        return (
            <CopyToClipboard text={color} onCopy={this.handleCopy}>
                <div style={{ background: color }} className="ColorBox">
                    <div className={`copy-overlay ${copied && "show"}`}
                        style={{ background: color }} />
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p className={isLightcolor && 'dark-color'}>{color}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkcolor && `white-color`}>{name}</span>
                        </div>
                        <button className={`copy-btn ${isLightcolor && `dark-color`}`}>Copy</button>
                    </div>
                    {showLink &&
                        (<Link to={url} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${isLightcolor && `dark-color`} `}>More</span>
                        </Link>)
                    }
                </div>
            </CopyToClipboard >
        )
    }
}
export default ColorBox;