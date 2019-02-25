import React, { Component } from 'react'
import { FormSectionWrapper, FormWrapper, FormText, Input, Error, Consent, SubmitButton, Checkbox } from './formStyles'

const emailRegex = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

const validateForm = (errors) => {
  let valid = true;

  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};


class Form extends Component {
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
       },
       email: {
         value: '',
         touched: false,
       },
       errors: {
         email: '',
         name: '',
         consent: ''
       }
     };

     this.handleInputChange = this.handleInputChange.bind(this);
   }


   handleInputChange(event) {
     event.preventDefault();

     const { name, value } = event.target;
     let errors = this.state.errors;
     let consent = this.state.consent;
     const input = event.target.checked;

     this.setState({
       consent: {
         touched: true,
         value: input,
       }
     });

     switch (name) {
     case 'firstName':
       errors.name =
         value.length < 3
           ? 'Name must be 2 characters long!'
           : '';
       break;
     case 'email':
       errors.email =
         emailRegex.test(value)
           ? ''
           : 'Email is not valid!';
       break;
     case 'consent':
      errors.consent =
        !consent.value
         ? 'consent must be checked'
         : '';
       break;
     default:
       break;
   }

   this.setState({errors, [name]: value}, ()=> {
    console.log(errors)
})
}

handleSubmit = (event) => {
  event.preventDefault();
  if(validateForm(this.state.errors)) {
    console.info('Valid Form')
  }else{
    console.error('Invalid Form')
  }
}

      render() {
        const {errors} = this.state;
        return(
          <FormSectionWrapper>
            <FormText>Yes Mate! Send me all the offers!</FormText>
            <FormWrapper
              noValidate >
              <label htmlFor="name">
                <Input
                  name="firstName"
                  type="text"
                  placeholder='Whats your name'
                  value={this.state.firstName.value}
                  onChange={this.handleInputChange}
                  noValidate />
              </label>
              {errors.name.length > 0 &&
              <Error>{errors.name}</Error>}
              <label htmlFor="email">
                <Input
                  name="email"
                  type="email"
                  placeholder='Enter Your Email'
                  value={this.state.email.value}
                  onChange={this.handleInputChange}
                  noValidate
                  />
              </label>
              {errors.email.length > 0 &&
              <Error>{errors.email}</Error>}
              <Consent>
              I agree with the T&CS, Privacy Policy and that FODE can
              contact me regarding their most excellent forthcoming promos
              </Consent>
              <Error>{errors.consent}</Error>
              <label htmlFor="consent">
                <Checkbox
                  name="consent"
                  type="checkbox"
                  checked={this.state.consent.value}
                  onChange={this.handleInputChange}
                  noValidate
                  />
              </label>
              <SubmitButton
                 type='submit'
                 onClick={this.handleSubmit}>
              submit
              </SubmitButton>
            </FormWrapper>
          </FormSectionWrapper>

        )
      }
   }


export default Form
