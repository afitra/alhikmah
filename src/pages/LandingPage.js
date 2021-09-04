import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "parts/Header"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
class LandingPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.title = "Al-Hikmah | Home"
    window.scrollTo(0, 0)
  }
  render() {
    // const { page } = this.props
    // if (!page.hasOwnProperty("landingPage")) return null
    return (
      <>
        <Header {...this.props}></Header>
        <h1>Kapan Prei ??? </h1>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  page: state.page,
})
export default LandingPage
