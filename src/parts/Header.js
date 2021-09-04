import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { fade, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import { Button, Link, TextField } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import Badge from "@material-ui/core/Badge"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import Paper from "@material-ui/core/Paper"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MailIcon from "@material-ui/icons/Mail"
import NotificationsIcon from "@material-ui/icons/Notifications"
import MoreIcon from "@material-ui/icons/MoreVert"
import { purple } from "@material-ui/core/colors"
import { getStyle, getColor } from "costom/getStyle"
import { ThemeProvider } from "@material-ui/styles"
import IconText from "./IconText"
export default function Header() {
  const classes = getStyle({
    colorTitle: purple[100],
  })

  // ==================== STATE ===========================

  const [isSearch, setIsSearch] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  // ==================== STATE ===========================

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const endSearch = (event) => {
    console.log("ini tes", event)
    setIsSearch(!isSearch)
  }
  const clickSearch = () => {
    setIsSearch(!isSearch)

    console.log("ini klik", isSearch)
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <AppBar style={{ position: "relative" }}>
      <Grid
        container
        display="flex"
        spacing={1}
        style={{ margin: "10px auto" }}
        display="flex"
      >
        {/* <Grid item container xs={3} direction="row" spacing={1}></Grid> */}
        <Grid
          item
          container
          xs={12}
          direction="row"
          spacing={1}
          style={{ marginLeft: "30%", marginRight: "30%" }}
        >
          {!isSearch && (
            <Grid className={classes.search} item xs align="center">
              <IconText />
            </Grid>
          )}
          {!isSearch && (
            <Grid item xs align="center">
              <Typography
                className={classes.title}
                color="secondary"
                noWrap
                item
                xs={3}
              >
                <Link
                  href="#"
                  color="inherit"
                  noWrap
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </Typography>
            </Grid>
          )}
          {!isSearch && (
            <Grid item xs align="center">
              <Typography
                className={classes.title}
                color="secondary"
                noWrap
                item
                xs={3}
              >
                <Link
                  href="#"
                  color="inherit"
                  noWrap
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </Typography>
            </Grid>
          )}
          {!isSearch && (
            <Grid item xs align="center">
              <Typography
                className={classes.title}
                color="secondary"
                noWrap
                item
                xs={3}
              >
                <Link
                  href="#"
                  color="inherit"
                  noWrap
                  style={{ textDecoration: "none" }}
                >
                  Gallery
                </Link>
              </Typography>
            </Grid>
          )}
          {!isSearch && (
            <Grid item xs align="center">
              <Typography
                className={classes.title}
                color="secondary"
                noWrap
                item
                xs={3}
              >
                <Link
                  href="#"
                  color="inherit"
                  noWrap
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </Typography>
            </Grid>
          )}
          {!isSearch && (
            <Grid item xs align="center">
              <Typography
                className={classes.title}
                color="secondary"
                noWrap
                item
                xs={3}
              >
                <SearchIcon onClick={clickSearch} />
              </Typography>
            </Grid>
          )}
          {isSearch && (
            <Grid item xs container align="center" spacing={1}>
              <Grid item xs={11}>
                <TextField
                  item
                  id="standard-basic"
                  margin="none"
                  onBlur={endSearch}
                  multiline={false}
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs align="left">
                <SearchIcon onClick={clickSearch}></SearchIcon>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </AppBar>
  )
}
