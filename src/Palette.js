import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import seedColors from './seedColors';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({ level });
    }
    render() {
        const { level } = this.state;
        const colorBoxes = this.props.palette.colors[level].map(c => (
            <ColorBox color={c.hex} key={c.name} name={c.name} />
        ));
        return (
            <div className="Palette" >
                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
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
