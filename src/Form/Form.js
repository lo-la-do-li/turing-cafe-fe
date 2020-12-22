import React, { Component } from 'react';
import './Form.css';
import { postNewReso } from '../apiCalls';

class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			date: '',
			time: '',
			number: ''
		}
	}

	handleChange = (event) => {
    event.preventDefault();
		this.setState({[event.target.name]: event.target.value})
	}

	handleSubmitNewReso = () => {
		postNewReso(this.state.name, this.state.date, this.state.time, this.state.number)
		.then(response => this.props.makeNewReso(response))
		this.clearInputs();
	}

	clearInputs = () => {
		this.setState({ name: '', date: '', time: '', number: '' })
	}
	
	render() {
		return (
			<section className='form'>
				<form>
					<input type='text' name='name' value={this.state.name} placeholder='Name' onChange={this.handleChange}></input>
					<input type='text' name='date' value={this.state.date} placeholder='Date'onChange={this.handleChange}></input>
					<input type='text' name='time' value={this.state.time} placeholder='Time'onChange={this.handleChange}></input>
					<input type='text' name='number' value={this.state.number} placeholder='Number'onChange={this.handleChange}></input>
					<button onClick={this.handleSubmitNewReso}>Make Reservation</button>
				</form>
			</section>
		)
	}
	
}

export default Form;