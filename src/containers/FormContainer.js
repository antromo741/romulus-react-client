import React, { Component } from 'react'

export default class FormContainer extends Component {
    state = {
        name: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit= (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/groups', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ group:this.state }),
        })
        .then((res) => res.json())
        .then((groupJson) => {
            this.props.history.push('/')
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}
            className="max-w-6xl w3/4 mx-auto mt-16 shadow-lg px-4 py-6"
            >

            <h1 className="text-center text-3xl font-semibold mb-2">New Group or something</h1> 
            <fieldset>
            <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Name this placeholder"
            className="w-full border p-4 my-4"
            />
            </fieldset>
            <button
            className="w-full p-4 bg-blue-300 mt-4 hover:bg-blue-500 transition-all duration-200"
            type="submit"
            >
            This will add what you typed or something lololol
            </button>
            
            
            </form>      
        )
    }
}