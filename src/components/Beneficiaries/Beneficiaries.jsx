import React from 'react';
import PropTypes from 'prop-types';
import styles from './Beneficiaries.module.css';
import styled from 'styled-components';
import { Button, Form, Message } from "semantic-ui-react";

const BeneficiariesFormContainer = styled.div``;
const StyledForm = styled(Form)``;
const ButtonContainer = styled.div``;

const Beneficiaries = () => (
  <BeneficiariesFormContainer data-testid="Beneficiaries">
    Beneficiaries Component
  </BeneficiariesFormContainer>
);

Beneficiaries.propTypes = {};

Beneficiaries.defaultProps = {};

export default Beneficiaries;
