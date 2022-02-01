import React from "react";
import styled from "styled-components";
import itwp_logo from "../../assets/header-icons/ITWP_logo_NoBG.png";
import Burger from "./Burger";

//Styled Components
const NavbarContainer = styled.div`
  padding: 64px 0px;
  width: 100%;
  height: 100px;
  z-index: 20;
  background: #2E428B;
`;

const NavbarWrap = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  background: url(${itwp_logo}) no-repeat;
  background-position: center center;
  background-clip: border-box;
  background-size: 264px 264px;
  cursor: pointer;
  overflow: hidden;
  width: 128px;
  height: 128px;

`;

const Nav = styled.div``;

// End Styled Components


const Navbar = () => {

    return (
      <NavbarContainer data-testid="Navbar">
        <NavbarWrap >
          <Logo data-testid="Logo" />
          <Nav>
        <Burger/>
          </Nav>
        </NavbarWrap>
      </NavbarContainer>
    );
  }

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
