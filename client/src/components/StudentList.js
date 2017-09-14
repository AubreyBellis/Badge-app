import React, { Component } from 'react';
import StudentCard from './StudentCard'
import axios from 'axios'

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
               {this.props.students.map((student) =>(
                 <StudentCard key={student.id} students={student} classroomId={this.props.classroomId}/>
               ))}
               
                </div>
        )
    }
}

StudentList.defaultProps = {
    students: []
}

export default StudentList;