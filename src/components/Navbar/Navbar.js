import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className="navbar-logo">
          Tommorrow's Promise
        </Link>
      </div>
      <div className='navbar-container'>
        <Link to='/auth' className="navbar-text">
          Account
        </Link>
      </div>
    </nav>
    </>
  )
}
Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
