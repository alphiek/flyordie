import React, { Component } from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'


const Form = styled.form`
  margin-top: 10em;
`
const emailRegex = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;

};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      formErrors: {
        name: '',
        email: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        ---Submitting--
        Name: ${this.state.name}
        Email: ${this.state.email}
        `);
    } else {
      console.error('Form Invalid');
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name =
          value.length < 2
          ? 'minimum two characters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'Email invalid';
        break;
      default:
        break;
    }

   this.setState({ formErrors, [name]: value }, () => console.log(this.state));
 };


  render() {
    const { formErrors } = this.state;

    return (
      <Form onSubmit={this.handleSubmit} noValidate >
      <div className='name'>
        <label htmlFor='name'>Enter Name</label>
        <input
          type='text'
          className=''
          placeholder='Enter Your Name'
          name='name'
          noValidate
          onChange={this.handleChange}
          />
          {formErrors.name.length > 0 && (
            <span className="errorMessage">{formErrors.name}</span>
          )}
      </div>
      <div className='email'>
        <label htmlFor='email'>Enter Email</label>
        <input
          type='email'
          className=''
          placeholder='Enter Your Email'
          name='email'
          noValidate
          onChange={this.handleChange}
          />
        {formErrors.email.length > 0 && (
          <span className="errorMessage">{formErrors.email}</span>
        )}
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
      </Form>
    )
  }
}

export default SignUpForm





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

        this.emailValidation = this.emailValidation.bind(this);
