import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form.js';
import { mockReso } from '../mockData'

describe('Form', () => {
 let nameInput, dateInput, timeInput, numberInput;
 let mockMakeNewReso;
  beforeEach(() => {
    mockMakeNewReso = jest.fn();
    
    render(
			<Form 
				makeNewReso={mockMakeNewReso} 
			/>
    );
  });

	it('it should render a form with four inputs', () => {
    nameInput = screen.getByPlaceholderText('Name');
    dateInput = screen.getByPlaceholderText('Date');
    timeInput = screen.getByPlaceholderText('Time');
    numberInput = screen.getByPlaceholderText('Number');

		expect(nameInput).toBeInTheDocument();
		expect(dateInput).toBeInTheDocument();
		expect(timeInput).toBeInTheDocument();
		expect(numberInput).toBeInTheDocument();
	});
	
	it('it should update state based on user input', () => {

    expect(nameInput.value).toBe('');
    expect(dateInput.value).toBe('');
    expect(timeInput.value).toBe('');
    expect(numberInput.value).toBe('');
    
    fireEvent.change(nameInput, {target: {value: 'Lola'}})
    fireEvent.change(dateInput, {target: {value: '12/21'}})
    fireEvent.change(timeInput, {target: {value: '7:00'}})
    fireEvent.change(numberInput, {target: {value: '2'}})
    
    expect(nameInput.value).toBe('Lola');
    expect(dateInput.value).toBe('12/21');
    expect(timeInput.value).toBe('7:00'); 
    expect(numberInput.value).toBe('2');
	});
});