import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";
import itwp_logo from "../../assets/header-icons/ITWP_logo_jpg.jpg";
import Burger from "./Burger";

//Styled Components
const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  z-index: 20;
  background: #ffff;
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
  width: 128px;
  height: 128px;
  background: url(${itwp_logo}) 0 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
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
