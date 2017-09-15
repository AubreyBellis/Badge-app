import React, { Component } from 'react';
import StudentCard from './StudentCard'
import axios from 'axios'
import styled from 'styled-components';

const StudentListStyles = styled.div`
margin: 20px 5%;
width: 90%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
font-family: 'Barrio', cursive;
font-size: 23px;
`;

class StudentList extends Component {
    constructor(){
        super();
        this.state = {
          classroom: {},
          students: []
        }
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
    
    render(){
        return (
            <div>
              <StudentListStyles>
               {this.props.students.map((student) =>(
                 <StudentCard key={student.id} students={student} classroomId={this.props.classroomId}/>
               ))}
               </StudentListStyles>
                </div>
        )
    }
}

StudentList.defaultProps = {
    students: []
}

export default StudentList;