import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('App', () => {
  
  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  });
});
