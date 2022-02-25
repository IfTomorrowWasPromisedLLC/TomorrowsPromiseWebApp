import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountForm from './AccountForm';
import Amplify, {Auth} from 'aws-amplify'
import { shallow, mount } from 'enzyme'
import {render, fireEvent} from '@testing-library/react'

describe('<AccountForm />', () => {
  const testAccount = {
    authState: "signedIn",
    email: "test@test.com",
    given_name: "Test",
    middle_name: "midTest",
    family_name: "McTest",
    birthdate: "2000-01-01",
    gender: "other",
    phone_number: "1234567890",
    address: "001 Test Lane",
  };

  it('should mount', () => {
    render(<AccountForm />);
  });

  it('should display account fields', () =>{
      
    const accountForm = screen.getByTestId('AccountForm');
    const given_name = screen.getByPlaceholderText("First Name");
    const middle_name = screen.getByPlaceholderText("Middle Name");
    const family_name = screen.getByPlaceholderText("Last Name");
    const birthdate = screen.getByPlaceholderText("02/02/2002");
    const gender = screen.getByPlaceholderText("Gender");
    const phone_number = screen.getByPlaceholderText("+61 0400 000 000");
    const address = screen.getByPlaceholderText("277 New Street, Newport 3015 Melbourne, Victoria, Australia");

    expect(accountForm).toBeInTheDocument();
    expect(given_name).toBeInTheDocument();
    expect(middle_name).toBeInTheDocument();
    expect(family_name).toBeInTheDocument();
    expect(birthdate).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(phone_number).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  });

  it('should allow user to save changes to Auth User', () => {
  //User clicks allow change
    const handleClick = jest.fn();
    render(<AccountForm/>)

    //user changes first name input
  const accountForm = render(<AccountForm/>);
  const firstName_input = accountForm.getByLabelText("First Name");
  fireEvent.changeText(firstName_input, 'TestFirst');
  
    const submit = jest.spyOn(object, 'handleSubmit')
    expect(AccountForm.state().given_name).toEqual("TestFirst");

    });

});