// App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllTeachers from "./components/AllTeachers";
import Teacher from "./components/Teacher";
import GlobalNav from './components/GlobalNav';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={AllTeachers}/>
         {/* <Route exact path="/signup" component={SignUp}/> */}
        <Route path="/teacher/:id" component={Teacher}/>
       </div>
      </Router>
    );
  }
}

export default App;