import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountForm from './AccountForm';

describe('<AccountForm />', () => {
  test('it should mount', () => {
    render(<AccountForm />);
    
    const accountForm = screen.getByTestId('AccountForm');

    expect(accountForm).toBeInTheDocument();
  });
});