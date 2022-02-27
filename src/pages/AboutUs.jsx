import React from "react";
import styled from "styled-components";

const AboutUsWrapper = styled.div``;
const PersonWrapper = styled.div``;
const styledMissionText = styled.div``;

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <missionContainer>
        <styledMissionText>
          <h1>INSERT HERE TEXT ABOUT WHY WE STARTED THE COMPANY</h1>
        </styledMissionText>
      </missionContainer>
      <PersonWrapper>
          Abijah Howell
      </PersonWrapper>
      <PersonWrapper>
          Crishon Washington
      </PersonWrapper>
      <PersonWrapper>
          Carlos Norman
      </PersonWrapper>
      <PersonWrapper>
          Kofi 
      </PersonWrapper>
      <div>About Us</div>
    </AboutUsWrapper>
  );
};

export default AboutUs;
