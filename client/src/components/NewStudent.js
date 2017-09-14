
import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class NewStudent extends Component {
    constructor(){
        super();
        this.state = {
            student: {
                name: '',
                age: '',
                image:''
                },
            redirect: false
        
        
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.student};
        newState[e.target.name] = e.target.value;
        this.setState({
            student: newState
        });
      }
    
    _addStudent = async (e) => {
        e.preventDefault();
        const payload = this.state.student

        const res = await axios.post('/api/students', payload)
        this.setState({redirect: true});
    }
      
  render() {
    return (
      <div>
          {this.state.redirect? 
            <Redirect to={`/students`}/>
            :
            <form onSubmit={this._addTeacher}>
            <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this._handleChange} type="text" name="name" value={this.state.student.name} />
            </div>
            <div>
            <label htmlFor="email">Age: </label>
            <input onChange={this._handleChange} type="text" name="age" value={this.state.student.age} />
            </div>
            <div>
            <label htmlFor="image">Image: </label>
            <input onChange={this._handleChange} type="text" name="image" value={this.state.student.image} />
            </div>
         
            
            
            <button>Add New Student</button>
        </form>
          }

        
    </div>
    )
  }
}