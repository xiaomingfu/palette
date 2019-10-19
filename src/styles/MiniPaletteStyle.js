export default {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    position: "relative",
    padding: "0.5rem",
    overflow: "hidden",
    border: "solid 1px black",

    cursor: "pointer",
    "&:hover svg": {
      opacity: "1"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  color: {
    height: "20%",
    width: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  },
  title: {
    color: "black",
    margin: "0",
    paddingTop: "0.6rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginRight: "0.5rem",
    fontSize: "1.5rem"
  },
  delete: {},
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0px",
    top: "0px",
    padding: "10px",
    zIndex: 10,
    opacity: 0
  }
};
