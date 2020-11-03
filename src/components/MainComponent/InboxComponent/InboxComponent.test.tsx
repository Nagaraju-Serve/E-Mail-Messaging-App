import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InboxComponent from './InboxComponent';

describe('<InboxComponent />', () => {
  test('it should mount', () => {
    render(<InboxComponent />);
    
    const inboxComponent = screen.getByTestId('InboxComponent');

    expect(inboxComponent).toBeInTheDocument();
  });
});