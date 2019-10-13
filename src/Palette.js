import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({ level });
    }
    changeFormat(val) {
        this.setState({ format: val });
    }
    render() {
        const { level, format } = this.state;
        const colorBoxes = this.props.palette.colors[level].map(c => (
            <ColorBox color={c[format]} key={c.name} name={c.name} />
        ));
        return (
            <div className="Palette" >
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
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
