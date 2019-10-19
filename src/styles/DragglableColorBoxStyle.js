const styles = {
  root: {
    display: "inline-block",
    width: "20%",
    height: "25%",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.8px"
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    }
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

export default styles;
