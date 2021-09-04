import React from "react"
import "./index.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { LandingPage } from "pages"
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
      </Router>
    </div>
  )
}

export default App
