import React, { Component } from 'react';
import Palette from './Palette';
import palettes from './seedColors';
import { generatePalette } from './colorHelper';
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
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
          <Route path="/palette/:paletteId/:colorId" render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />)} />
        </Switch>
      </div >
    );
  }
}

export default App;
