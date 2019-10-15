import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';

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
        const { colors, paletteName, emoji, id } = this.props.palette;
        const colorBoxes = colors[level].map(c => (
            <ColorBox color={c[format]} key={c.id} name={c.name} url={`/palette/${id}/${c.id}`} showLink={true} />
        ));
        return (
            <div className="Palette" >
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showAllColor />
                <div className="Palette-colors" >
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />

            </div >
        );
    }
}

export default Palette;
