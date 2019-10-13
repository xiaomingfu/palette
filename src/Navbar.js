import React, { Component } from 'react';
import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

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
        const { level, changeLevel, } = this.props;
        const { format } = this.state;
        return (
            <div className="Navbar">
                <div className="Navbar-logo">
                    <Link to="/">Palette</Link>
                </div>
                <div className="slider-container">
                    <span>level: {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                    </div>
                </div>
                <div className="select-container">
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

export default Navbar;