import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Parent from './Parent';

describe('<Parent />', () => {
  test('it should mount', () => {
    render(<Parent />);
    
    const parent = screen.getByTestId('Parent');

    expect(parent).toBeInTheDocument();
  });
});