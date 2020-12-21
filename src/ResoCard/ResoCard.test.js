import React from 'react';
import ResoCard from './ResoCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockReso } from '../mockData.js';

describe('ResoCard', () => {
  it('should render a reservation card', () => {

    const mockRemoveDeletedReso = jest.fn()
    
    render(
      <ResoCard 
        id={mockReso.id}
        name={mockReso.name}
        date={mockReso.date}
        time={mockReso.time}
        number={mockReso.number}
        key={mockReso.id}
        removeDeletedReso={mockRemoveDeletedReso}
      />
    )
    const name = screen.getByText('Lola')
    const date = screen.getByText('Date: 12/21')
    const time = screen.getByText('Time: 7:00')
    const number = screen.getByText('Number: 2')
    
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  })
})