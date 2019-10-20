import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import styles from "./styles/ColorBoxStyle";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.handleCopy = this.handleCopy.bind(this);
  }
  handleCopy() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { color, name, url, showingFullPalette, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={color} onCopy={this.handleCopy}>
        <div style={{ background: color }} className={classes.colorBox}>
          <div
            className={clsx(classes.copyOverLay, {
              [classes.showOverlay]: copied
            })}
            style={{ background: color }}
          />
          <div className={clsx(classes.copyMeg, { [classes.showMsg]: copied })}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{color}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyBtn}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={url} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMoreBtn}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(styles)(ColorBox);
