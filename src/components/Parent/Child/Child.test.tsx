import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Child from './Child';

describe('<Child />', () => {
  test('it should mount', () => {
    render(<Child />);
    
    const child = screen.getByTestId('Child');

    expect(child).toBeInTheDocument();
  });
});