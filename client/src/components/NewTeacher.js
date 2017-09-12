
import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class NewTeacher extends Component {
    constructor(){
        super();
        this.state = {
            teacher: {
                name: '',
                email: '',
                image:''
                },
            redirect: false
        
        
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.teacher};
        newState[e.target.name] = e.target.value;
        this.setState({
            teacher: newState
        });
      }
    
    _addTeacher = async (e) => {
        e.preventDefault();
        const payload = this.state.teacher

        const res = await axios.post('/api/teachers', payload)
        this.setState({redirect: true});
    }
      
  render() {
    return (
      <div>
          {this.state.redirect? 
            <Redirect to={`/`}/>
            :
            <form onSubmit={this._addTeacher}>
            <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this._handleChange} type="text" name="name" value={this.state.teacher.name} />
            </div>
            <div>
            <label htmlFor="email">Email: </label>
            <input onChange={this._handleChange} type="text" name="email" value={this.state.teacher.email} />
            </div>
            <div>
            <label htmlFor="image">Image: </label>
            <input onChange={this._handleChange} type="text" name="image" value={this.state.teacher.image} />
            </div>
            
            <button>Add New Teacher</button>
        </form>
          }

        
    </div>
    )
  }
}