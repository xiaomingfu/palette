import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteListStyle.js";
import MiniPalette from "./MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes, deletePalette } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to="/palette/new">create palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(p => (
              <CSSTransition key={p.id} classNames="fade" timeout={800}>
                <MiniPalette
                  {...p}
                  key={p.id}
                  id={p.id}
                  handleClick={() => this.goToPalette(p.id)}
                  handleDelete={deletePalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
