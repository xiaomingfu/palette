import sizes from "./sizes";
export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  gobackBtn: {
    display: "inline-block",
    width: "20%",
    height: "50%",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-3.5px",
    opacity: "1",
    transition: "0.5s",
    background: "black",
    "& a": {
      color: "white",
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
      textDecoration: "none"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.3333%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  }
};
