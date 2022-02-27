import Amplify, { Auth } from "aws-amplify";
import React, { Component } from "react";
import Select from "react-select";
import { Form } from "semantic-ui-react";

// import Select from 'react-select'
import styled from "styled-components";
import aws_exports from "../../aws-exports";

Amplify.configure(aws_exports);

const AccountFormContainer = styled.div``;
const StyledForm = styled.form`
  div {
    padding: 4px;
  }
  input,
  .gender-select {
    padding: 12px;
    margin: 2px;
    display: inline-block;
    width: 60%;
    border-radius: 4px;
    border-color: transparent;
    font-size: 18px;
  }
  .gender-select {
    color: black;
    width: 61.5%;
    margin-left: -2px;
  }
`;

const ButtonContainer = styled.div`
  width:60%;
  .btn {
    width: 50%;
    padding: 20px;
    background-color: green;
    border-radius: 10px;
    border-width: 1px;
    border-color: white;
    :hover {
      box-shadow: 4px 5px 5px green;
      border-color: green;
    }
  }
  #submit-btn {
    background-color: gray;
    :hover {
      box-shadow: 4px 5px 5px gray;
      border-color: gray;
    }
  }
`;
const Button = styled.button``;

const GENDER_OPTIONS = [
  { key: "m", label: "Man", value: "man" },
  { key: "w", label: "Woman", value: "woman" },
  { key: "t", label: "Transgender", value: "transgender" },
  { key: "n", label: "Non-Binary", value: "nonbinary" },
  { key: "o", label: "Other", value: "other" },
];

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authState: this.props.authState,
      email: "",
      given_name: "",
      middle_name: "",
      family_name: "",
      birthdate: "",
      gender: "",
      phone_number: "",
      address: "",
    };
    this.isEditable = false;
  }

  componentDidMount() {
    this.findUser();
  }

  findUser() {
    Auth.currentAuthenticatedUser({ bypassCache: true })
      .then((user) => {
        this.setState({
          authData: user,
          authState: "signedIn",

          email: user.attributes.email ? user.attributes.email : "",
          given_name: user.attributes.given_name
            ? user.attributes.given_name
            : "",
          middle_name: user.attributes.middle_name
            ? user.attributes.middle_name
            : "",
          family_name: user.attributes.family_name
            ? user.attributes.family_name
            : "",
          birthdate: user.attributes.birthdate ? user.attributes.birthdate : "",
          gender: user.attributes.gender ? user.attributes.gender : "",
          phone_number: user.attributes.phone_number
            ? user.attributes.phone_number
            : "",
          address: user.attributes.address ? user.attributes.address : "",

          stateFromStorage: true,
        });
        console.log(this.state.authData.nickname);
      })
      .catch((e) => {
        this.setState({ authState: "signIn" });
      });
  }

  allowChange = () => {
    try {
      console.log("handling editable var");
      this.isEditable = true;
      console.log(this.isEditable);
    } catch (e) {
      alert("error editing account informaton");
    }
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.isEditable);
    if (this.isEditable) {
      console.log("handling submit");
      Auth.updateUserAttributes(this.state.authData, {
        email: this.state.email,
        given_name: this.state.given_name,
        middle_name: this.state.middle_name,
        family_name: this.state.family_name,
        birthdate: this.state.birthdate,
        gender: this.state.gender,
        phone_number: this.state.phone_number,
        address: this.state.address,
      }).catch((e) => {
        console.log("Error updating user: ");
        console.log(e);
        alert("Error updating Account Information");
      });
      alert("Account Information Updated");
      this.isEditable = false;
    }
  };

  render() {
    let loading = true;
    if (this.state.authData) {
      loading = false;
    }

    const {
      email,
      given_name,
      middle_name,
      family_name,
      birthdate,
      gender,
      phone_number,
      address,
    } = this.state;

    return (
      <AccountFormContainer>
        <StyledForm onSubmit={this.handleSubmit} loading={loading}>
          <div>
            <Form.Input label="Username" value={email} width={10} />
            <Form.Input
              name="given_name"
              value={given_name}
              label="First Name"
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
            <Form.Input
              name="birthdate"
              value={birthdate}
              label="Birthday"
              placeholder="02/02/2002"
              width={4}
              onChange={this.handleChange}
              error={false}
            />
            <Select
              name="gender"
              className="gender-select"
              value={gender}
              label="Gender"
              placeholder="Select Gender"
              options={GENDER_OPTIONS}
              width={6}
              onChange={this.handleChange}
              error={false}
            />
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
              name="address"
              value={address}
              label="Address"
              placeholder="277 New Street, Newport 3015 Melbourne, Victoria, Australia"
              width={16}
              onChange={this.handleChange}
              error={false}
            />
          </div>
          <ButtonContainer>
            <Button
              id="change-btn"
              className="btn"
              type="button"
              onClick={this.allowChange}
            >
              Change Account Info
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button id="submit-btn" className="btn" type="submit">
              Submit
            </Button>
          </ButtonContainer>
        </StyledForm>
      </AccountFormContainer>
    );
  }
}

export default AccountForm;
