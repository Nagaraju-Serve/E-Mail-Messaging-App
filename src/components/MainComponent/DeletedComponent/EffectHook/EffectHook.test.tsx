import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EffectHook from './EffectHook';

describe('<EffectHook />', () => {
  test('it should mount', () => {
    render(<EffectHook />);
    
    const effectHook = screen.getByTestId('EffectHook');

    expect(effectHook).toBeInTheDocument();
  });
});