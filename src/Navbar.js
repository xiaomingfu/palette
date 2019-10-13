import React, { Component } from 'react';
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@material-ui/core/Select';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex" };
        this.handleChangeFormat = this.handleChangeFormat.bind(this);
    }
    handleChangeFormat(evt) {
        this.setState({ format: evt.target.value }, () => this.props.handleChange(evt.target.value));
    }
    render() {
        const { level, changeLevel, } = this.props;
        const { format } = this.state;
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
                <div className="Select-container">
                    <Select value={format} onChange={this.handleChangeFormat}>
                        <MenuItem value='hex'>HEX -#ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB -rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA -rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
            </div>
        )
    }
}

export default Navbar;