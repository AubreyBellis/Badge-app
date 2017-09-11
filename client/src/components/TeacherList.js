// client/components/ArtistList.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TeacherList extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      teachers: []
    }
  }

  componentWillMount(){
    this._fetchTeachers();
  }

  _fetchTeachers = async () => {
    try {
      const res = await axios.get('/api/teachers');
      await this.setState({teachers: res.data});
      return res.data;
    }
    catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }
    
  }

  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <div>
        <h1>All Teachers</h1>
        {this.state.teachers.map(teacher => (
          <div>
            <Link to={`/teacher/${teacher.id}`} >{teacher.name}</Link> 
          </div>
        ))}
      </div>
    );
  }
}

export default TeacherList;