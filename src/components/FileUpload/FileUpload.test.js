import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FileUpload from './FileUpload';

describe('<FileUpload />', () => {
  test('it should mount', () => {
    render(<FileUpload />);
    const fileUpload = screen.getByTestId('FileUpload');
    expect(fileUpload).toBeInTheDocument();
  });

  it("should contain upload button", () => {
    render(<FileUpload />);
    const uploadButton = screen.getByTestId("FileUploadButton");
    expect(uploadButton).toBeInTheDocument();
  });

  it("should have hidden file upload input", () => {
    render(<FileUpload />);
    const fileInput = screen.getByTestId("FileUploadInput");
    expect(fileInput).toBeInTheDocument();
  });

  // it("should be abe to upload multiple files", () => {
  //   render(<FileUpload/>);
  // });

});