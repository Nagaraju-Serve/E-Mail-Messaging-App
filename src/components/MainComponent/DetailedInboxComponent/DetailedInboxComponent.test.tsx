import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailedInboxComponent from './DetailedInboxComponent';

describe('<DetailedInboxComponent />', () => {
  test('it should mount', () => {
    render(<DetailedInboxComponent />);
    
    const detailedInboxComponent = screen.getByTestId('DetailedInboxComponent');

    expect(detailedInboxComponent).toBeInTheDocument();
  });
});