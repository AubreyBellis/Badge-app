import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import StudentList from './StudentList'

const ClassroomStyles = styled.div`
  img {
    max-height: 400px;
    width: 100%;
  }
`;


class Classroom extends Component {
  constructor(){
      super();
      this.state = {
          students:[],
          classroom: {
              grade_level: ''
          },
          redirect: false
      };
  }

componentWillMount(){
      const classroomId = this.props.match.params.id;
      this._fetchClassroomAndStudents();
      
  }

  _fetchClassroomAndStudents = async () => {
    
      try {
        
          const id = this.props.match.params.id;
          console.log(id)
          const res = await axios.get(`/api/classrooms/${this.props.match.params.id}/students`)
          this.setState({
           classroom: res.data.classroom,
              students: res.data.students
          })
        
          return res.data
          console.log(res.data)
      }
      catch(err) {
          console.log(err)
      }
  }
  _deleteClassroom = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.delete(`/api/classrooms/${this.props.match.params.id}`)
          this.setState({redirect: true})
          return res.data
          

      } catch(err) {
          console.log(err)
      }
  }
  render() {
    return (
      <div>
        {this.state.redirect 
        ? 
            <Redirect to={'/'} />
        :


            <div>
            <ClassroomStyles>
            <h1><strong>Grade_Level: </strong> {this.state.classroom.grade_level}</h1>
            <p><strong>Students:</strong></p>
           
 <StudentList students={this.state.students} classroomId={this.props.match.params.id}/>
            <Link to={`/classrooms/${this.props.match.params.id}/edit`}><button>Edit Classroom Information</button></Link>
            {/* <button onClick={this._deleteClassroom}>Delete This Classroom</button> */}
            </ClassroomStyles>
      </div>

    }
    </div>
    )
  }
}

export default Classroom;