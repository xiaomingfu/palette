import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
class App extends Component {
  render() {
    return (
      <div>
        {/* pass them all in individually */}
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
