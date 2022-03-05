import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Subscription from './Subscription';

describe('<Subscription />', () => {
  test('it should mount', () => {
    render(<Subscription />);
    
    const subscription = screen.getByTestId('Subscription');

    expect(subscription).toBeInTheDocument();
  });
});