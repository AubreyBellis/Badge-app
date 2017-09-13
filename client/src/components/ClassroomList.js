import React, { Component } from 'react';
import ClassroomCard from './ClassroomCard'
import axios from 'axios'

class ClassroomList extends Component {
    constructor(){
        super();
        this.state = {
          error: '',
          classrooms: []
        }
      }
    
      componentWillMount(){
        this._fetchClassrooms();
      }
    
      _fetchClassrooms = async () => {
        try {
          const response = await axios.get('/api/classrooms');
          const classrooms = response.data;
          this.setState({classrooms});
        } catch (err) {
          this.setState({error: err})
        }
      }
    
    render(){
        return (
            <div>
               {this.props.classrooms.map((classroom) =>(
                 <ClassroomCard key={classroom.id} classrooms={classroom} teacherId={this.props.teacherId}/>
               ))}
               
                </div>
        )
    }
}

ClassroomList.defaultProps = {
    classrooms: []
}

export default ClassroomList;