import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReducerHook from './ReducerHook';

describe('<ReducerHook />', () => {
  test('it should mount', () => {
    render(<ReducerHook />);
    
    const reducerHook = screen.getByTestId('ReducerHook');

    expect(reducerHook).toBeInTheDocument();
  });
});