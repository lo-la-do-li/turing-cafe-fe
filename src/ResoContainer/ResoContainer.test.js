import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import ResoContainer from './ResoContainer';
import ResoCard from '../ResoCard/ResoCard';
import { mockReservations } from '../mockData';

beforeEach(() => {
  const mockRemoveDeletedReso = jest.fn()

  render(
    <ResoContainer 
      reservations={mockReservations}
      removeDeletedReso={mockRemoveDeletedReso}
    />
  )
})
  describe('ResoContainer', () => {
    it('should render a set of previously made reservations', () => {
      const name = screen.getByText('Steph');
      const name2 = screen.getByText('Finn');

      expect(name).toBeInTheDocument();
      expect(name2).toBeInTheDocument();
    })
  })