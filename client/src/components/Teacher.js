import React, { Component } from 'react';
import axios from 'axios';

class Teacher extends Component {
  constructor() {
    super();
    this.state = {
      teacher: {},
      classrooms: [],
    };
  }

  componentWillMount() {
    const teacherId = this.props.match.params.id;
    this._fetchTeachers(teacherId)
  }

  _fetchTeachers = async (teacherId) => {
    try {
      const response = await axios.get(`/api/teachers/${teacherId}/classrooms`)
      await this.setState({teacher: response.data.teacher, classrooms: response.data.classrooms});
      return response.data;
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  } 

  render() {
    return (
      <div>
        <img src={this.state.teacher.image} alt="" />
        <h1>{this.state.teacher.name}</h1>
        {/* {this.state.classrooms.map(song => (
          <div key={classroom.id}>
            <h4>{classroom.grade_level}</h4> */}
          </div>
    );
  }
}

export default Teacher;  