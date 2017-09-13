import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditClassroom extends Component {
    constructor() {
        super();
        this.state = {
            classroom: {
            grade_level: ''
            }
        }
    }

    componentWillMount() {
        this._fetchClassroom()
    }
    
    _fetchClassroom = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/classrooms/${id}`);
            await this.setState({classroom: res.data.classroom});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.classroom}
        newState[e.target.name] = e.target.value
        this.setState({classroom: newState})
    }

    _editClassroom = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const payload = this.state.classroom
        try {
            const res = axios.patch(`/api/classrooms/${id}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.classroom.id
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="grade_level">Grade Level: </label>
                        <input onChange={this._handleChange} type="text" name="grade_level" value={this.state.classroom.grade_level} />
                    </div>
                    <button onClick={this._editClassroom}>Submit</button>
                </form>
                <br />
            </div>
        );
    }
}

export default EditClassroom;