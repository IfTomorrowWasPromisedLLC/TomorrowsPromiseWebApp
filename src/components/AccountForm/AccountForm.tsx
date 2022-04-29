import { throws } from "assert";
import { Auth } from "aws-amplify";
import React, { Component, useState } from "react";
import {
  Grid,
  Header,
  Form,
  Button,
  Message,
  Input,
  Segment,
  Select,
} from "semantic-ui-react";
import AuthData from "../../model/authdata";
import Customer from "../../model/customer";
import {
  getCurrentAuthenticatedUser,
  authSubject,
} from "../../services/auth/auth.service";
import { GENDER_OPTIONS } from "./GenderOptions";
export default class AccountForm extends Component {
  userMessage = {
    auth: new AuthData("", "", ""),
    customer: new Customer("","","","","",[],""),
  };
  //authdata
  email: String = "";
  firstName: String = "";
  lastName: String = "";
  state = {
    AuthData: this.userMessage.auth,
    authState: this.userMessage.auth.state,
    nickname: "",
    email: "",
    given_name: "",
    middle_name: "",
    family_name: "",
    birthdate: "",
    gender: "",
    phone_number: "",
    address: "",
    website: "",
  };

  constructor(props: any) {
    super(props);
    authSubject.subscribe((value) => {
      this.userMessage = value;
    });
    this.state = {
      AuthData: this.userMessage.auth,
      authState: this.userMessage.auth.state,
      nickname: "",
      email: "",
      given_name: "",
      middle_name: "",
      family_name: "",
      birthdate: "",
      gender: "",
      phone_number: "",
      address: "",
      website: "",
    };
  }

  handleSubmit() {
    Auth.updateUserAttributes(this.state.AuthData, {
      nickname: this.state.nickname,
      email: this.state.email,
      given_name: this.state.given_name,
      middle_name: this.state.middle_name,
      family_name: this.state.family_name,
      birthdate: this.state.birthdate,
      gender: this.state.gender,
      phone_number: this.state.phone_number,
      address: this.state.address,
      website: this.state.website,
    }).catch((e) => {
      console.log("Error updating user: ");
      console.log(e);
    });
  }

  handleChange = (e: any, { name, value }: any) => {
    this.setState({ [name]: value });
  };
  
  render() {
    let loading = true;
    if (this.userMessage.auth.attributes.email) {
      loading = false;
    }

    const {
      nickname,
      email,
      given_name,
      middle_name,
      family_name,
      birthdate,
      gender,
      phone_number,
      address,
      website,
    } = this.userMessage.auth.attributes;

    return (
      <Segment color="blue">
        <Grid padded>
          <Grid.Column>
            <Header as="h1">Account Information</Header>
            <p>Please update your details.</p>

            <Form onSubmit={this.handleSubmit} loading={loading}>
              <Form.Group>
                <Form.Input
                  name="nickname"
                  value={nickname}
                  label="Display Name"
                  placeholder="Display name"
                  width={6}
                  onChange={this.handleChange}
                  error={false}
                />
                <Form.Input label="Username" value={email} width={10} />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  name="given_name"
                  value={given_name}
                  label="First name"
                  placeholder="First Name"
                  width={6}
                  onChange={this.handleChange}
                  error={false}
                />
                <Form.Input
                  name="middle_name"
                  value={middle_name}
                  label="Middle Name"
                  placeholder="Middle Name"
                  width={4}
                  onChange={this.handleChange}
                  error={false}
                />
                <Form.Input
                  name="family_name"
                  value={family_name}
                  label="Last Name"
                  placeholder="Last Name"
                  width={6}
                  onChange={this.handleChange}
                  error={false}
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  name="birthdate"
                  value={birthdate}
                  label="Birthday"
                  placeholder="02/02/2002"
                  width={4}
                  onChange={this.handleChange}
                  error={false}
                />
                <Form.Select
                  name="gender"
                  value={gender}
                  label="Gender"
                  placeholder="Gender"
                  options={GENDER_OPTIONS}
                  width={6}
                  onChange={this.handleChange}
                  error={false}
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  name="phone_number"
                  value={phone_number}
                  label="Mobile number"
                  placeholder="+61 0400 000 000"
                  width={6}
                  onChange={this.handleChange}
                  error={false}
                />
                <Form.Input
                  name="website"
                  value={website}
                  label="Website"
                  placeholder="www.mywebsite.com"
                  width={10}
                  onChange={this.handleChange}
                  error={false}
                />
              </Form.Group>

              <Form.Group>
                <Form.Input
                  name="address"
                  value={address}
                  label="Address"
                  placeholder="2/77 New Street, Newport 3015 Melbourne, Victoria, Australia "
                  width={16}
                  onChange={this.handleChange}
                  error={false}
                />
              </Form.Group>

              <Message
                success
                header="Account Details Updated"
                content="Your details have been updated."
              />

              <Message
                error
                header="Somthing Went Wrong"
                content="One of the fields has error. Please look over the forms to see where the error is. "
              />

              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}
