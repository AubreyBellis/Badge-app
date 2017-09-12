import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const TeacherStyles = styled.div`
  img {
    max-height: 400px;
    width: 100%;
  }
`;

class Teacher extends Component{
  constructor(){
    super();
    this.state = {
      teacher: {},
      classrooms: []
    }
  }

  componentWillMount(){
    this._fetchTeacherAndClassrooms();
  }

  _fetchTeacherAndClassrooms = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/teachers/${id}`)
    this.setState({
      teacher: res.data.teacher,
      classrooms: res.data.classrooms
    })
  }

  render(){
    return (
      <TeacherStyles>
        <img src={this.state.teacher.image} />
        <h1>{this.state.teacher.name}</h1>
        {/* <h4>Nationality: {this.state.artist.nationality}</h4> */}
        <h3>Classrooms</h3>
        {this.state.classrooms.map(classroom => (
          <div key={classroom.id}>
            <p>Grade: {classroom.grade_level}</p>
            <p>Students: {classroom.students}</p>
          </div>
        ))}
      </TeacherStyles>
    )
  }
}

export default Teacher;