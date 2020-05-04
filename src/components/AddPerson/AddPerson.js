import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    };

    render() {
        return (
            <div className="AddPerson">
                <p>Adding... {this.state.name} with {this.state.age} year</p>
                <input name="name" type="text" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
                <input name="age" type="number" placeholder="Age" onChange={this.handleChange} value={this.state.age} />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person ...</button>
            </div>
        );
    }
}

export default AddPerson; 