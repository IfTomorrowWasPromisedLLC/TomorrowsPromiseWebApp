import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { MenuItems } from "./MenuItems";
const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};
describe("<Navbar />", () => {
  it("should render navbar", () => {
    render(<MockNavbar />);
    const navbar = screen.getByTestId("Navbar");
    expect(navbar).toBeInTheDocument();
  });

  it("should render logo", () => {
    render(<MockNavbar />);
    const logo = screen.getByTestId("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("should render navbar links", () => {
    render(<MockNavbar />);
    MenuItems.map((item) => {
      return expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

});
