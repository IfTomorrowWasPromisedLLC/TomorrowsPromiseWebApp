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
    const values = [...inputFields];
    values.push(formFields);
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
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
    Add Beneficiaries
    <StyledForm onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
            <Fragment>
            <div>
            <label htmlFor='firstName'>First Name</label>
              <input key={index}
                type='text'
                className='form-control'
                id='firstName'
                name='firstName'
                value={inputField.firstName}
                onChange={(event) => handleChange(index, event)} />
            </div>
            <div>
            <label htmlFor='lastName'>Last Name</label>
              <input key={index}
               type='text'
               className='form-control'
               id='lastName'
               name='lastName'
               value={inputField.lastName}
                onChange={(event) => handleChange(index, event)} />
            </div>
            <div>
            <label htmlFor="emailAddress"> Email Address</label>
            <input key={index}
               type='text'
               className='form-control'
               id='emailAddress'
               name='emailAddress'
               value={inputField.email_address}
                onChange={(event) => handleChange(index, event)} />
            </div>
            <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input key={index}
               type='text'
               className='form-control'
               id='phoneNumber'
               name='phoneNumber'
               value={inputField.phone_number}
                onChange={(event) => handleChange(index, event)} />
            </div>
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
                  onClick={() => handleAddFields(index)}
                >
                  +
                </Button>
              </ButtonContainer>
              </Fragment>
              
          )
        )}
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
