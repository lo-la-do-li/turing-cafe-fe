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
			guests: ''
		}
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleSubmitNewReso = () => {
		postNewReso(this.state.name, this.state.date, this.state.time, this.state.guests)
		.then(response => this.props.makeNewReso(response))
		this.clearInputs();
	}

	clearInputs = () => {
		this.setState({ name: '', date: '', time: '', guests: '' })
	}
	
	render() {
		return (
			<section className='form'>
				<form>
					<input type='text' name='name' value={this.state.name} placeholder='Name' onChange={this.handleChange}></input>
					<input type='text' name='date' value={this.state.date} placeholder='Date'onChange={this.handleChange}></input>
					<input type='text' name='time' value={this.state.time} placeholder='Time'onChange={this.handleChange}></input>
					<input type='text' name='guests' value={this.state.guests} placeholder='Guests'onChange={this.handleChange}></input>
					<button onClick={this.handleSubmitNewReso}>Make Reservation</button>
				</form>
			</section>
		)
	}
	
}

export default Form;