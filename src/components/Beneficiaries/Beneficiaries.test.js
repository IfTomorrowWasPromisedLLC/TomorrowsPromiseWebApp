import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Beneficiaries from './Beneficiaries';

describe('<Beneficiaries />', () => {
  test('it should mount', () => {
    render(<Beneficiaries />);
    
    const beneficiaries = screen.getByTestId('Beneficiaries');

    expect(beneficiaries).toBeInTheDocument();
  });
});