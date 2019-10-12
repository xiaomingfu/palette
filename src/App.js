import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
class App extends Component {
  render() {
    return (
      <div>
        {/* pass them all in individually */}
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
