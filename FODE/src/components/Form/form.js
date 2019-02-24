import React, { Component } from 'react'
import { FormSectionWrapper, FormWrapper, FormText, Input, Error, Consent, SubmitButton, Checkbox } from './formStyles'

const emailRegex = RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);


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
         isValidated: false,
         errors: ''
       },
       email: {
         value: '',
         touched: false,
         isValidated: false,
         errors: '',
       }
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
       <span>Name must be over two characters</span>
     )};
       return null;
     }

     emailValidation() {
       let touched = this.state.email.touched;
       let emailCheck = this.state.email.value;
       if ( emailRegex.test(emailCheck) === false ) {
         console.log('not a correct email')
         return (
         <span>Unfortunately that is not a valid email</span>
         )};
       return null;
       }

       consentValidation() {
         let touched = this.state.consent.touched;
         let consent = this.state.consent.value;
         if ( touched === true && consent === false ) {
           return (
           <span>Please agree to be contacted to receive the offers</span>
           )};
           return null;
         }

      render() {
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
              <Error>{this.nameValidation()}</Error>
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
              <Error>{this.emailValidation()}</Error>
              <Consent>
              I agree with the T&CS, Privacy Policy and that FODE can
              contact me regarding their most excellent forthcoming promos
              </Consent>
              <Error>{this.consentValidation()}</Error>
              <label htmlFor="consent">
                <Checkbox
                  name="consent"
                  type="checkbox"
                  checked={this.state.consent.value}
                  onChange={this.handleConsentChange}
                  noValidate
                  />
              </label>
              <SubmitButton
                 type='submit'>
              submit
              </SubmitButton>
            </FormWrapper>
          </FormSectionWrapper>

        )
      }
   }


export default Form
