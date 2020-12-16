import React, { Component } from 'react';
import './Form.css';
import { postNewReso } from '../apiCalls';

class Form extends Component {
	constructor() {
		this.state = {
			name: '',
			date: '',
			time: '',
			numberGuests: '',
		}
		
	}
}

export default FormData;