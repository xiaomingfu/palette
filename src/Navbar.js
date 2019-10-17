import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/NavbarStyle';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex", open: true };
        this.handleChangeFormat = this.handleChangeFormat.bind(this);
        this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    }
    handleChangeFormat(evt) {
        this.setState({ format: evt.target.value, open: true }, () => this.props.handleChange(evt.target.value));
    }
    handleCloseSnackbar() {
        this.setState({ open: false })
    }
    render() {
        const { level, changeLevel, showAllColor, classes } = this.props;
        const { format } = this.state;
        return (
            <div className={classes.Navbar}>
                <div className={classes.NavbarLogo}>
                    <Link to="/">Palette</Link>
                </div>
                <div>
                    {showAllColor && (
                        <div>
                            <span>level: {level}</span>
                            <div className={classes.slider}>
                                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                            </div>
                        </div>

                    )}
                </div>
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleChangeFormat}>
                        <MenuItem value='hex'>HEX -#ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB -rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA -rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.open}
                        autoHideDuration={3000}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        onClose={this.handleCloseSnackbar}
                        message={<span id="message-id">Format changed to {format.toUpperCase()}</span>}
                        action={[
                            <IconButton
                                key="close"
                                aria-label="close"
                                color="inherit"
                                onClick={this.handleCloseSnackbar}
                            >
                                <CloseIcon />
                            </IconButton>
                        ]}
                    >
                    </Snackbar>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);