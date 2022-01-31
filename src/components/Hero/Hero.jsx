import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";
import styled from "styled-components";

const Section = styled.section``;
const Content = styled.div``;
const Left = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Button = styled.a``;

const Hero = () => (
  <Section>
    <Content>
      <Left>
        <Title> Define your legacy.</Title>
        <Desc> Choose how you want to be remembered. <br/>
          Save photos, videos, audio, and documents.<br/>
          Leave a message for your loved ones for 
          when you are no longer here.<br/>
          Tomorrow is not promised, but here your legacy is.
          </Desc>
        <Button />
      </Left>
    </Content>
  </Section>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
