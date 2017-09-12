import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const TeacherStyles = styled.div`
  img {
    max-height: 400px;
    width: 100%;
  }
`;


class Teacher extends Component {
  constructor(){
      super();
      this.state = {
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
      this._fetchTeachers(teacherId);
      
  }

  _fetchTeachers = async (teacherId) => {
      try {
          const res = await axios.get(`/api/teachers/${teacherId}`)
          await this.setState({teacher: {
              name: res.data.name,
              email: res.data.email,
              image: res.data.image,

          }})
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
            <img src={this.state.teacher.image} />
            <h1><strong>Name: </strong> {this.state.teacher.name}</h1>
            <p><strong>Email: </strong> {this.state.teacher.email}</p>
            <Link to={`/teachers/${this.props.match.params.id}/edit`}><button>Edit Teacher</button></Link>
            <button onClick={this._deleteTeacher}>Delete This Teacher</button>
      </div>

    }
    </div>
    )
  }
}

export default Teacher;