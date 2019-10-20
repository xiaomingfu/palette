import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import { blue } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import styles from "./styles/PaletteListStyle.js";
import MiniPalette from "./MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = { dialogOpen: false, deletingId: "" };
    this.closeDialog = this.closeDialog.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  closeDialog() {
    this.setState({ dialogOpen: false, deletingId: "" });
  }
  openDialog(id) {
    this.setState({ dialogOpen: true, deletingId: id });
  }
  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }
  render() {
    const { palettes, classes } = this.props;
    const { dialogOpen } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to="/palette/new">create palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(p => (
              <CSSTransition key={p.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...p}
                  key={p.id}
                  id={p.id}
                  handleClick={() => this.goToPalette(p.id)}
                  // handleDelete={deletePalette}
                  openDialog={this.openDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={dialogOpen}
          arial-labeledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">Delete Palette</DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>

            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <DeleteIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
