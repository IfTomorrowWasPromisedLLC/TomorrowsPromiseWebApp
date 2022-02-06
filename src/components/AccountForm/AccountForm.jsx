import React, { Component } from "react";
import {
  Form,
  Button,
  Message,
  Input,
  Segment,
  Select,
} from "semantic-ui-react";
import styled from "styled-components";
import { Auth } from "aws-amplify";
import Amplify from "aws-amplify";
import aws_exports from "../../aws-exports";
Amplify.configure(aws_exports);

const AccountFormContainer = styled.div``;
const styledForm = styled(Form)``;
const ButtonContainer = styled.div`
  .btn {
    color: green;
  }
`;

const GENDER_OPTIONS = [
  { key: "m", text: "Man", value: "man" },
  { key: "w", text: "Woman", value: "woman" },
  { key: "t", text: "Transgender", value: "transgender" },
  { key: "n", text: "Non-Binary", value: "nonbinary" },
  { key: "o", text: "Other", value: "other" },
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

    this.canChangeState = false;
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

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
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
    });
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
        <styledForm onSubmit={this.handleSubmit} loading={loading}>
          <Form.Group>
            <Form.Input label="Username" value={email} width={10} />
          </Form.Group>
          <Form.Group>
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
            id="success-msg"
            className="msg"
            success
            header="Account Details Updated"
            content="Your details have been updated."
          />

          <Message
            id="error-msg"
            className="msg"
            error
            header="Somthing Went Wrong"
            content="One of the fields has error. Please look over the forms to see where the error is. "
          />
          <ButtonContainer>
            <Button id="change-btn" className="btn" onClick={true}>
              Change account Info
            </Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button id="submit-btn" className="btn" type="submit">
              Submit
            </Button>
          </ButtonContainer>
        </styledForm>
      </AccountFormContainer>
    );
  }
}

export default AccountForm;
