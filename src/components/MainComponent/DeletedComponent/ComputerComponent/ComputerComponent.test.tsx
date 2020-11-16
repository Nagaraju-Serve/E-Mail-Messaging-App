import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ComputerComponent from './ComputerComponent';

describe('<ComputerComponent />', () => {
  test('it should mount', () => {
    render(<ComputerComponent />);
    
    const computerComponent = screen.getByTestId('ComputerComponent');

    expect(computerComponent).toBeInTheDocument();
  });
});