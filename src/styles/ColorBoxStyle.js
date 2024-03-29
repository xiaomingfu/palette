import chroma from "chroma-js";
import sizes from "./sizes";
export default {
  colorBox: {
    display: "inline-block",
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
      transition: "0.5s"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: props => (props.showingFullPalette ? "20%" : "33.3333%")
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => (props.showingFullPalette ? "10%" : "20%")
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: props => (props.showingFullPalette ? "5%" : "10%")
    }
  },
  copyText: {
    color: props => (chroma(props.color).luminance() >= 0.7 ? "black" : "white")
  },
  colorName: {
    color: props =>
      chroma(props.color).luminance() <= 0.08 ? "white" : "black"
  },
  seeMoreBtn: {
    color: props =>
      chroma(props.color).luminance() >= 0.7 ? "black" : "white",
    background: "rgba(255, 255, 255, 0.5)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyBtn: {
    color: props =>
      chroma(props.color).luminance() >= 0.7 ? "black" : "white",
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
    opacity: "0"
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    fontSize: "12px"
  },
  copyOverLay: {
    width: "100%",
    height: "100%",
    opacity: "0",
    zIndex: "0",
    position: "absolute",
    transition: "transform 0.5s ease-in-out",
    transform: "scale(0.1)"
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute"
  },
  copyMeg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textshadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.5)",
      width: "100%",
      textAlign: "center",
      padding: "1rem",
      marginBottom: "0",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "5rem;"
      }
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    }
  },
  showMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
};
