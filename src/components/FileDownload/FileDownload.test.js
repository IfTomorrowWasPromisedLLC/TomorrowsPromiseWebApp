import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FileDownload from './FileDownload';

describe('<FileDownload />', () => {
  test('it should mount', () => {
    render(<FileDownload />);
    
    const fileDownload = screen.getByTestId('FileDownload');

    expect(fileDownload).toBeInTheDocument();
  });
});