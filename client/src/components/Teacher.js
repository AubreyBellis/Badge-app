import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ClassroomList from './ClassroomList'

const TeacherStyles = styled.div`
  img {
    max-height: 400px;
    width: 100%;
  }
  h1, p {
    font-family: 'Fjalla One', sans-serif;
  }
`;


class Teacher extends Component {
  constructor(){
      super();
      this.state = {
          classrooms:[],
          teacher: {
              name: '',
              email:'',
              image:''
          },
          redirect: false
      };
  }

componentWillMount(){
      const teacherId = this.props.match.params.id;
      this._fetchTeachersAndClassrooms();
      
  }

  _fetchTeachersAndClassrooms = async () => {
      try {
          const id = this.props.match.params.id;
          const res = await axios.get(`/api/teachers/${id}/classrooms`)
          await this.setState({
           teacher: res.data.teacher,
              classrooms: res.data.classrooms
          })
        
          return res.data
          console.log(res.data)
      }
      catch(err) {
          console.log(err)
      }
  }
  _deleteTeacher = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.delete(`/api/teachers/${this.props.match.params.id}`)
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
            <TeacherStyles>
            <img src={this.state.teacher.image} />
            <h1><strong>Name: </strong> {this.state.teacher.name}</h1>
            <p><strong>Email: </strong> {this.state.teacher.email}</p>
            <p><strong>Classrooms:</strong></p>
            <ClassroomList classrooms={this.state.classrooms} teacherId={this.props.match.params.id}/>
            <Link to={`/teachers/${this.props.match.params.id}/edit`}><button>Edit Teacher</button></Link>
            <button onClick={this._deleteTeacher}>Delete This Teacher</button>
            </TeacherStyles>
      </div>

    }
    </div>
    )
  }
}

export default Teacher;