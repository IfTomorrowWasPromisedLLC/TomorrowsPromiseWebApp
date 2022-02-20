import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mockClient } from "aws-sdk-client-mock";
import AccountForm from './AccountForm';
import Amplify, {Auth} from 'aws-amplify'
import awsconfig from '../../..'
import { Item } from 'react-bootstrap/lib/Breadcrumb';

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

  it('should allow user to save changes', () => {
    render(<AccountForm />);
   


  });
  
  it('should return AWS auth user', () => {
    const component = Wrapper2.dive().instance();
    //mock AWS auth with jest.

    //call mocked functionality
    //expect() return value
  });

  it('should update Auth user information', () => {
     //mock AWS auth with jest.
    //call mocked functionality
    //expect() return value
  });
});