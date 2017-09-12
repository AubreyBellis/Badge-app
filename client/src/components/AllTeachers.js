import React, { Component } from 'react';
import axios from 'axios';
import TeacherCard from './TeacherCard';
import styled from 'styled-components';

const TeacherListStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

class AllTeachers extends Component{
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
      const response = await axios.get('/api/teachers');
      const teachers = response.data;
      this.setState({teachers});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render(){
    return (
      <TeacherListStyles>
        {this.state.teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </TeacherListStyles>
    )
  }
}

export default AllTeachers;