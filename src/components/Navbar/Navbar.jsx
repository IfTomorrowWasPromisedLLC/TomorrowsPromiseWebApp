import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";
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

const NavUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  
  li {
    padding: 18px 10px;
  }
`;

const NavLi = styled.li``;

const NavBarLink = styled.link``;
// End Styled Components


const Navbar = () => {

    return (
      <NavbarContainer>
        <NavbarWrap >
          <Logo />
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
