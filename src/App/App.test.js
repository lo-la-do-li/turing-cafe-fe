import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { mockReso, mockReservations, mockReservations2 } from '../mockData'
import { fetchAllResos, postNewReso, deleteReso } from '../apiCalls';
jest.mock('../apiCalls');


describe('App', () => {
  let mockRemoveDeletedReso;
  beforeEach(() => {
    fetchAllResos.mockResolvedValue(mockReservations);
    postNewReso.mockResolvedValueOnce(mockReso);
    deleteReso.mockResolvedValueOnce(mockReservations2);
    mockRemoveDeletedReso = jest.fn()

    render(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays all reservations on page on load', async () => {
    const reso1 = await waitFor(() => screen.getByText('Steph'));
    const reso2 = await waitFor(() => screen.getByText('Finn'));

    expect(reso1).toBeInTheDocument();
    expect(reso2).toBeInTheDocument();
  });

  it('displays a new reservation when user completes the form and submits', async () => {
    const submitButton = screen.getByText('Make Reservation');

    fireEvent.click(submitButton);
    const newResoName = await waitFor(() => screen.getByText('Lola'));
    expect(newResoName).toBeInTheDocument();
  });
  
  it('removes a reservation from display when the delete button is clicked', () => {
    
    const cardToDelete = screen.getByText('Finn');
    const deleteButton = screen.getByText('X');

    fireEvent.click(cardToDelete);
    expect(mockRemoveDeletedReso).toHaveBeenCalledWith(2);
  })

});
