import React from 'react'
import { Form } from 'semantic-ui-react'
import styled from 'styled-components'
import ContactUs from '../components/ContactUs/ContactUs'

const ContactFormContainer = styled.div`
    width: 100%;
`;

const Contact = () => {
  return (
    <ContactFormContainer>
        <ContactUs/>
    </ContactFormContainer>
  )
}

export default Contact