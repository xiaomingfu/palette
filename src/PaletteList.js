import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <MiniPalette />
                {palettes.map(p => (
                    <MiniPalette {...p} />))
                }
            </div>
        )
    }
}
export default PaletteList;