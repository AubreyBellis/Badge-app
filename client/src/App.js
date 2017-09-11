// App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ArtistList from "./components/ArtistList";
import Teacher from "./components/Teacher";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Badge-Of-Honor</h1>
            <div>
              <Link to="/">Teachers</Link>
              <Link to="/teacher/1">Individual Teacher</Link>
            </div>
          </div>
          {/* <Route exact path="/" component={ArtistList} /> */}
          <Route path="/teacher/:id" component={Teacher} />
        </div>
      </Router>
    );
  }
}

export default App;