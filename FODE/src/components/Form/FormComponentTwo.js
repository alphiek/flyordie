import React, { Component } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'


const Form = styled.form`
  margin-top: 10em;
`

const emailRegex = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consent: {
        value: false,
        touched: false,
      },
      firstName: {
        value: '',
        touched: false,
        isValidated: false,
        errors: ''
      },
      email: {
        value: '',
        errors: '',
        touched: false,
        isValidated: false
      },
    };

    this.handleConsentChange = this.handleConsentChange.bind(this);
    this.consentValidation = this.consentValidation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.nameValidation = this.nameValidation.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
  }

  handleConsentChange(event) {
    const target = event.target;
    const input = target.checked;
    this.setState({
      consent: {
        touched: true,
        value: input,
      }
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const input = target.value;
    const name = target.name;

    this.setState({
      [name]: {
        touched: true,
        value: input,
        isValidated: false,
        errors: ''
      }
    });
  }


nameValidation() {
  let touched = this.state.firstName.touched;
  let letterCounter = this.state.firstName.value;
  let errors = this.state.firstName.errors;

  if ( touched === true && letterCounter.length < 2 ) {
    console.log('name too short');
    return (
    <span>Name too short</span>
  )} else if ( touched === false ){
    console.log('enter a name');
    return (
    <span>Enter a Name</span>
  )};
    return null;
  }

  emailValidation() {
    let touched = this.state.email.touched;
    let emailCheck = this.state.email.value;
    if ( emailRegex.test(emailCheck) === false ) {
      console.log('not a correct email')
      return (
      <span>Email not correct</span>
      )};
    return null;
    }



consentValidation() {
  let touched = this.state.consent.touched;
  let consent = this.state.consent.value;
  if ( touched === true && consent === false ) {
    return (
    <span>Please click the checkbox</span>
    )};
    return null;
  }


  render() {
    return (
      <Form>
        <label>
          GDPR Consent:
          <input
            name="consent"
            type="checkbox"
            checked={this.state.consent.value}
            onChange={this.handleConsentChange}
            noValidate
            />
        </label>
        {this.consentValidation()}
        <br />
        <label>
          Name:
          <input
            name="firstName"
            type="text"
            placeholder='Enter Your Name'
            value={this.state.firstName.value}
            onChange={this.handleInputChange}
            noValidate />
        </label>
        <br />
        {this.nameValidation()}
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            placeholder='Enter Your Email'
            value={this.state.email.value}
            onChange={this.handleInputChange}
            noValidate
            />
        </label>
        {this.emailValidation()}
        <button
           type='submit'>
        submit
        </button>
      </Form>
    );
  }
}

export default SignUpForm
