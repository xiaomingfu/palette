import sizes from "./sizes";
export default {
  Navbar: {
    display: "flex",
    height: "6vh",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  NavbarLogo: {
    marginRight: "15px",
    padding: "0 13px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "22px",
    fontFamily: "Roboto sans-serif",
    backgroundColor: "#eceff1",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover": {
      outline: "none",
      border: "2px solid green",
      backgroundColor: "green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginTop: "-3px"
    },
    [sizes.down("md")]: {
      width: "150px"
    }
  },
  selectContainer: {
    marginLeft: "auto",
    margingRight: "1rem"
  }
};
