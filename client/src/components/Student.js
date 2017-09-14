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


class Student extends Component {
  constructor(){
      super();
      this.state = {
        student: {
            name: '',
            age:'',
            image:''
        },
        redirect: false
    };
}

componentWillMount(){
    this._fetchStudents();
  }

  _fetchStudents = async () => {
    const classroomId = this.props.classroomId;
    try {
      const response = await axios.get(`/api/classrooms/${classroomId}/students`);
      const students = response.data;
      this.setState({students});
    } catch (err) {
      this.setState({error: err})
    }
  }

//   _deleteClassroom = async (e) => {
//       e.preventDefault();
//       try {
//           const res = await axios.delete(`/api/classrooms/${this.props.match.params.id}`)
//           this.setState({redirect: true})
//           return res.data
          

//       } catch(err) {
//           console.log(err)
//       }
//   }
  render() {
    return (
      <div>
        {this.state.redirect 
        ? 
            <Redirect to={'/'} />
        :


            <div>
            <ClassroomStyles>

            <img src={this.state.student.image} />
            <h1><strong>Name: </strong> {this.state.student.name}</h1>
            <p><strong>Age:{this.state.student.age}</strong></p>
            <StudentList students={this.state.students} classroomId={this.props.match.params.id}/>

            {/* <Link to={`/classrooms/${this.props.match.params.id}/edit`}><button>Edit Classroom Information</button></Link>
            <button onClick={this._deleteClassroom}>Delete This Classroom</button> */}
            </ClassroomStyles>
      </div>

    }
    </div>
    )
  }
}

export default Student;