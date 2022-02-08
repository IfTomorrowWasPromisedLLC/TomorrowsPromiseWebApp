import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 40px;

  li {
    .nav-links {
      color: white;
      text-decoration: none;
      padding: 18px 10px;

      :hover {
        background-color: grey;
        border-radius: 4px;
        transition: all 0.2s ease-out;
      }
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: grey;
    border-width: 10px;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 18px 10px;
      .nav-links {
        :hover {
          background-color: #2e428b;
        }
      }
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
          <li key={index} onClick={()=>"/{item.url}"}>
            <Link className={item.classname} to={item.url}>
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
