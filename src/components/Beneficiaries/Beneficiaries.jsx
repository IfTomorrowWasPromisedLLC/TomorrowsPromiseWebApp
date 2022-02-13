import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Beneficiaries.module.css';
import styled from 'styled-components';
import { formFields } from './formFields';
import { formRow, input } from 'aws-amplify';

const BeneficiariesFormContainer = styled.div``;
const StyledForm = styled.form``;
const styledFormRow = styled.div``;
const styledInputWrapper = styled.div``;
const ButtonContainer = styled.div``;
const Button = styled.button``;

const Beneficiaries = () => {
  const [inputFields, setInputFields] = useState(formFields);

  const handleAddFields = () => {
    const values = [...inputFields.values];
    values.push({formFields});
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values.values);
  };

  const handleChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    console.log(inputFields[0]);
    setInputFields(values);
  };

  const handleSubmit = (event) => {
    alert(JSON.stringify(inputFields,null,1));
  };

  const handleFormReset = (event) => setInputFields([formFields.values]);

  return(
  <BeneficiariesFormContainer data-testid="Beneficiaries">
    Beneficiaries Component
    <StyledForm onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => {
          return(
            <Fragment>
              <label> {inputField.name}</label>
              <input key={index}
                type={inputField[index]}
                className={inputField[index]}
                id={inputField[index]}
                name={inputField[index]}
                value={inputField[index]}
                onChange={(event) => handleChange(index, event)} />
            <ButtonContainer>
                <Button
                  type="button"
                  disabled={index === 0}
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </Button>
                <Button
                  type="button"
                  disabled={index === 0}
                  onClick={() => handleRemoveFields(index)}
                >
                  +
                </Button>
              </ButtonContainer>
              </Fragment>
              
          )
        })}
        <ButtonContainer>
          <Button id="submit-btn"
            type = "submit"
            onSubmit={handleSubmit}>
              Save
          </Button>
          <Button
            id="reset-btn"
            type="reset"
            onClick={handleFormReset}
          >
            Reset Form
          </Button>
        </ButtonContainer>
    </StyledForm>
  </BeneficiariesFormContainer>
        );
      }
  


Beneficiaries.propTypes = {};

Beneficiaries.defaultProps = {};

export default Beneficiaries;
