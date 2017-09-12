import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

class EditTeacher extends Component {
    constructor() {
        super();
        this.state = {
            creature: {
                name: '',
                email: '',
                image:''
            },
            redirect: false

        }
    }
    

    componentWillMount() {
        const teacherId = this.props.match.params.id
        this._fetchTeacher(teacherId)       
    }

    _fetchTeacher = async (teacherId) => {
        try {
            const res = await axios.get(`/api/teachers/${teacherId}`)
            await this.setState({
                teacher: {
                    name: res.data.name,
                    email: res.data.email,
                    image: res.data.image
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }   

    _editTeacher = async (e) => {
        e.preventDefault();
        const teacher = this.state.teacher
        const teacherId = this.props.match.params.id
        try {
            const res = await axios.put(`/api/teachers/${teacherId}`, teacher)
            this.setState({redirect: true})
            return res.data
        } 
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.teacher}
        newState[e.target.name] = e.target.value
        this.setState({
            teacher: newState
        })
    }

    render() {
        return (
            <div>
                {this.state.redirect? 
                <Redirect to={`/teachers/${this.props.match.params.id}`}/>
                :
                <div>
                <h1>Create a Teacher</h1>
                <form>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.teacher.name} />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input onChange={this._handleChange} type="text" name="email" value={this.state.teacher.email} />
                    </div>
                    <div>
                        <label htmlFor="image">Image:</label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.teacher.image} />
                    </div>
                    <button onClick={this._teacher}>Submit</button>
                </form>
                </div>
                }
              
            </div>
        );
    }
}

export default EditTeacher;