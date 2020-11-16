import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultipleReducers from './MultipleReducers';

describe('<MultipleReducers />', () => {
  test('it should mount', () => {
    render(<MultipleReducers />);
    
    const multipleReducers = screen.getByTestId('MultipleReducers');

    expect(multipleReducers).toBeInTheDocument();
  });
});