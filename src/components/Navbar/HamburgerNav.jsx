import React from 'react';
import styled from 'styled-components';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    li{
        padding: 18px 10px;
    }

   @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: blueviolet;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li{
        color: #fff;
    }

   }
`;

const ButtonContainer = styled.div``;

const Button = styled.button``;

const HamburgerNav = ({ open }) => {
  return (
    <Ul open={open}>
          {MenuItems.map((item, index) => {
              return (
                  <li key={index}>
                      <Link className={item.className} to={item.url}>
                          {item.title}
                      </Link>
                  </li>
              );
          })}
          <ButtonContainer>
              <Button>Contact us</Button>
          </ButtonContainer>
      </Ul>
      
    );
};

export default HamburgerNav;
