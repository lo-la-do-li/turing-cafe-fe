import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form.js';

describe('Form', () => {
	it('it should render a form with four inputs', () => {
		const mockMakeNewReso = jest.fn();

		render(
			<Form 
				makeNewReso={mockMakeNewReso} 
			/>
		)
		expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Date')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Time')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Guests')).toBeInTheDocument();
	})
	
	it('it should update state based on user input', () => {
		const mockMakeNewReso = jest.fn();
		render(
			<Form 
				makeNewReso={mockMakeNewReso} 
			/>
		)
		const mockUserInput = {
				name: 'Lola',
				date: '03/04/2025',
				time: '6:00',
				guests: '4'
			}
		
		mockMakeNewReso.mockResolvedValue(mockUserInput)

		const submitButton = screen.getByText('Make Reservation')

		fireEvent.click(submitButton)
		
		expect(screen.getByText('Lola')).toBeInTheDocument();

	})
})