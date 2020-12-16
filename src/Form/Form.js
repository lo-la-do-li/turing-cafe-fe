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
		render() {
			return(
				<section className='form'>
					<form>
					<input type='text' name='name' value={this.state.name} placeholder='Name'></input>
					<input type='text' name='date' value={this.state.date} placeholder='Date'></input>
					<input type='text' name='time' value={this.state.time} placeholder='Time'></input>
					<input type='text' name='number' value={this.state.number} placeholder='Number'></input>
					</form>
				</section>
			)
		}
		
	}

export default Form;