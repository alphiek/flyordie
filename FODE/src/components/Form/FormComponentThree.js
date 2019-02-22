import React, { Component } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'


const Form = styled.form`
  margin-top: 10em;
`

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consent: {
        value: false,
        errors: '',
        touched: ''
      },
      firstName: {
        value: '',
        errors: '',
        touched: false,
        isValidated: false
      },
      email: {
        value: '',
        errors: '',
        touched: false,
        isValidated: false
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const input = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: {
        touched: true,
        value: input,
        errors: ''
      }
    });
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
            onChange={this.handleInputChange}
            noValidate
            />
        </label>
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
        <button
           type='submit'
           onClick={this.handleSubmit}
           />
        submit
        </button>
      </Form>
    );
  }
}

export default SignUpForm
