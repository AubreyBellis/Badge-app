import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditTeacher extends Component {
    constructor() {
        super();
        this.state = {
            teacher: {
            name: '',
            email: '',
            image: ''
            }
        }
    }

    componentWillMount() {
        this._fetchTeacher()
    }
    
    _fetchTeacher = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/teachers/${id}`);
            await this.setState({teacher: res.data.teacher});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.teacher}
        newState[e.target.name] = e.target.value
        this.setState({teacher: newState})
    }

    _editTeacher = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const payload = this.state.teacher
        try {
            const res = axios.patch(`/api/teachers/${id}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.teacher.id
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="name">name: </label>
                        <input onChange={this._handleChange} type="text" name="name" value={this.state.teacher.name} />
                    </div>
                    <div>
                        <label htmlFor="email">email: </label>
                        <input onChange={this._handleChange} type="text" name="email" value={this.state.teacher.email} />
                    </div>
                    <div>
                        <label htmlFor="image">image: </label>
                        <input onChange={this._handleChange} type="text" name="image" value={this.state.teacher.image} />
                    </div>
                    <div>
                        <label htmlFor="classroom">classrooms: </label>
                        <input onChange={this._handleChange} type="text" name="classroom" value={this.state.teacher.classroom} />
                    </div>
                    <button onClick={this._editTeacher}>Submit</button>
                </form>
                <br />
            </div>
        );
    }
}

export default EditTeacher;