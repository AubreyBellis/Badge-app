// App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllTeachers from "./components/AllTeachers";
import EditTeacher from './components/EditTeacher';
import Teacher from "./components/Teacher";
import SplashPage from './components/SplashPage'
import GlobalNav from './components/GlobalNav';
import NewTeacher from './components/NewTeacher';
// import { setAxiosDefaults } from './util';


class App extends Component {
  // componentWillMount(){
  //   setAxiosDefaults();
  // }
  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path='/' component={SplashPage} />
          <Route exact path="/teachers" component={AllTeachers}/>
          <Route exact path='/teachers/:id/edit' component={EditTeacher} />
          <Route exact path='/newTeacher' component={NewTeacher} />
        <Route path="/teacher/:id" component={Teacher}/>
       </div>
      </Router>
    );
  }
}

export default App;