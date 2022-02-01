import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
const MockNavbar = () => {
    return(
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
    );
}
describe('<Navbar />', () => {
  it('should render navbar', () => {
    render(<MockNavbar/>);
    const navbar = screen.getByTestId("Navbar");
    expect(navbar).toBeInTheDocument();
  });

});
