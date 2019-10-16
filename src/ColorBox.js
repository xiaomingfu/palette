import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    colorBox: {
        display: "inline-block",
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1"
        },
    },
    copyText: {
        color: props => chroma(props.color).luminance() >= 0.7 ? 'black' : 'white',
    },
    colorName: {
        color: props => chroma(props.color).luminance() <= 0.08 ? 'white' : 'black',
    },
    seeMoreBtn: {
        color: props => chroma(props.color).luminance() >= 0.7 ? 'black' : 'white',
        background: "rgba(255, 255, 255, 0.5)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
    },
    copyBtn: {
        color: props => chroma(props.color).luminance() >= 0.7 ? 'black' : 'white',
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline - block",
        background: "rgba(255, 255, 255, 0.5)",
        top: "50%",
        left: "50%",
        marginTop: "-20px",
        marginLeft: "-50px",
        textAlign: "center",
        outline: "none",
        fontSize: "1rem",
        textTransform: "uppercase ",
        border: "none",
        textDecoration: "none",
        opacity: "0",
    }
}
class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.handleCopy = this.handleCopy.bind(this);
    }
    handleCopy() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        })
    }
    render() {
        const { color, name, url, showingFullPalette, classes } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={color} onCopy={this.handleCopy}>
                <div style={{ background: color }} className={classes.colorBox}>
                    <div className={`copy-overlay ${copied && "show"}`}
                        style={{ background: color }} />
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{color}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyBtn}>Copy</button>
                    </div>
                    {showingFullPalette &&
                        (<Link to={url} onClick={e => e.stopPropagation()}>
                            <span className={classes.seeMoreBtn}>More</span>
                        </Link>)
                    }
                </div>
            </CopyToClipboard >
        )
    }
}
export default withStyles(styles)(ColorBox);