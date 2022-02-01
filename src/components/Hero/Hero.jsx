import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";
import styled from "styled-components";

const Section = styled.section``;
const Content = styled.div`
  height: 400px;
  width: 100%;
  background-color: purple;

`;
const Left = styled.div`
  float: left;
  padding-left: 20px;
`;
const Right = styled.div`
  float: right;
  padding-right: 20px;
  height: 400px;
  width: 40%;
`;
const Title = styled.h1`
margin-top: 140px;
margin-bottom: 120px;
`;
const Desc = styled.p`
line-height: 24px;
`;
const Button = styled.a``;

const Hero = () => (
  <Section>
    <Content>
      <Left>
        <Title> Define your legacy.</Title>
        <Desc>
          Choose how you want to be remembered. 
          <br />
          Save photos, videos, audio, and documents.
          <br />
          Leave a message for your loved ones for when 
          you are no longer here.
          <br />
          Tomorrow is not promised, but here your legacy is.
        </Desc>
        <Button />
      </Left>
      <Right>
        {/* Image */}
        <h1> Insert IMAGE here </h1>
      </Right>
    </Content>
  </Section>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
