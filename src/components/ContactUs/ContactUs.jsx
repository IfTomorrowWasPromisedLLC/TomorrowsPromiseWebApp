import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import styled from "styled-components";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "../../aws-exports";
Amplify.configure(aws_exports);

const ContactFormContainer = styled.div``;
const StyledForm = styled.form`
  div, span {
    padding: 4px;
  }
  input,
  textarea {
    padding: 12px;
    margin: 2px;
    width: 60%;
    border-radius: 4px;
    border-color: transparent;
    font-size: 18px;
  }
`;
const ButtonContainer = styled.div`
  width: 60%;
  #submit-btn {
    width: 50%;
    padding: 20px;
    border-radius: 10px;
    border-width: 1px;
    background-color: gray;
    :hover {
      box-shadow: 4px 5px 5px gray;
      border-color: gray;
    }
  }
`;
const Button = styled.button`
  cursor: pointer;
`;

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authState: this.props.authState,
      email: "",
      given_name: "",
      family_name: "",
    };
  }
  componentDidMount() {
    this.findUser();
  }

  findUser() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.setState({
          authData: user,
          authState: "signedIn",

          email: user.attributes.email ? user.attributes.email : "",
          given_name: user.attributes.given_name
            ? user.attributes.given_name
            : "",
          family_name: user.attributes.family_name
            ? user.attributes.family_name
            : "",

          stateFromStorage: true,
        });
        console.log(this.state.authData.nickname);
      })
      .catch((e) => {
        this.setState({ authState: "signIn" });
      });
  }

  render() {
    let loading = true;
    if (this.state.authData) {
      loading = false;
    }

    const { email, given_name, family_name } = this.state;

    return (
      <ContactFormContainer>
        <StyledForm onSubmit={this.handleSubmit} loading={loading}>
          <div>
            <span>Email</span>
            <Form.Input value={email} width={10} />
            <span>First Name</span>
            <Form.Input
              name="given_name"
              value={given_name}
              placeholder="First Name"
              width={6}
              onChange={this.handleChange}
              error={false}
            />
            <span>Last Name</span>
            <Form.Input
              name="family_name"
              value={family_name}
              placeholder="Last Name"
              width={6}
              onChange={this.handleChange}
              error={false}
            />
            <span>Subject</span>
            <Form.TextArea
              name="Subject"
              placeholder="Please enter a subject line for your email"
              width={16}
              onChange={this.handleChange}
              error={false}
            />
            <span>Message</span>
            <Form.TextArea
              name="Message"
              placeholder="How can we help?"
              width={40}
              height={40}
              onChange={this.handleChange}
              error={false}
            />
            <ButtonContainer>
              <Button id="submit-btn" type="submit">
                Submit
              </Button>
            </ButtonContainer>
          </div>
        </StyledForm>
      </ContactFormContainer>
    );
  }
}

export default ContactUs;
