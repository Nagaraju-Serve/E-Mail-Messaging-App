import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingleReducerHook from './SingleReducerHook';

describe('<SingleReducerHook />', () => {
  test('it should mount', () => {
    render(<SingleReducerHook />);
    
    const singleReducerHook = screen.getByTestId('SingleReducerHook');

    expect(singleReducerHook).toBeInTheDocument();
  });
});