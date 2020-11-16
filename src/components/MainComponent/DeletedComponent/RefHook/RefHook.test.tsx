import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RefHook from './RefHook';

describe('<RefHook />', () => {
  test('it should mount', () => {
    render(<RefHook />);
    
    const refHook = screen.getByTestId('RefHook');

    expect(refHook).toBeInTheDocument();
  });
});