import React, { Component } from 'react';
import Palette from './Palette';
import palettes from './seedColors';
import { generatePalette } from './colorHelper';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
class App extends Component {
  findPalette(id) {
    return palettes.find(function (palette) {
      return palette.id === id;
    })
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(routeProps) => <PaletteList palettes={palettes} {...routeProps} />}></Route>
          <Route exact path="/palette/:id" render={(routeProps) => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)}
          />
          <Route exact path="/palette/:paletteId/:colorId" render={() => <h1>Single Color Page</h1>} />
        </Switch>
      </div >
    );
  }
}

export default App;
