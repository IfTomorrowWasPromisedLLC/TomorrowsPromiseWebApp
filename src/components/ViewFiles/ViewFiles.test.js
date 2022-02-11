import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewFiles from './ViewFiles';

describe('<ViewFiles />', () => {
  test('it should mount', () => {
    render(<ViewFiles />);
    
    const viewFiles = screen.getByTestId('ViewFiles');

    expect(viewFiles).toBeInTheDocument();
  });
});