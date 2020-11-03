import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ComposeComponent from './ComposeComponent';

describe('<ComposeComponent />', () => {
  test('it should mount', () => {
    render(<ComposeComponent />);
    
    const composeComponent = screen.getByTestId('ComposeComponent');

    expect(composeComponent).toBeInTheDocument();
  });
});