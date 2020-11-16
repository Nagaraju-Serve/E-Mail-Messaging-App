import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StateHook from './StateHook';

describe('<StateHook />', () => {
  test('it should mount', () => {
    render(<StateHook />);
    
    const stateHook = screen.getByTestId('StateHook');

    expect(stateHook).toBeInTheDocument();
  });
});