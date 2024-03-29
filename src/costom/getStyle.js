import { fade, makeStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"
import { purple } from "@material-ui/core/colors"
var getStyle = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: "primary",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: (props) => ({
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#ffffff",
    alignContent: "center",
  }),
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  // ===================
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

const getColor = createMuiTheme({
  palette: {
    primary: {
      main: "#66bfbf",
    },
    secondary: {
      main: "#ff4b5c",
    },
  },
})
export { getStyle, getColor }
