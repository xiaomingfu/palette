import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props;
        return (
            <div className="Navbar">
                <div className="Navbar-logo">
                    <a href="#">Palette</a>
                </div>
                <div className="slider-container">
                    <span>level: {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                    </div>

                </div>
            </div>
        )
    }
}

export default Navbar;