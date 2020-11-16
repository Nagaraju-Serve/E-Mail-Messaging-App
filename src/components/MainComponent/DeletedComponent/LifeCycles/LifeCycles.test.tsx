import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LifeCycles from './LifeCycles';

describe('<LifeCycles />', () => {
  test('it should mount', () => {
    render(<LifeCycles />);
    
    const lifeCycles = screen.getByTestId('LifeCycles');

    expect(lifeCycles).toBeInTheDocument();
  });
});