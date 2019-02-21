/*import React from 'react'
import { Formik, Form, Field } from 'formik'
import { FormContainer, FormWrapper, FormText, GDPR, SubmitButton } from './formStyles'
import * as Yup from 'yup'
import styled from 'styled-components'


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your name'),
  email: Yup.string()
    .email('Whoops! Thats not a valid email')
    .required('Please enter your email'),
  consent: Yup.bool()
    .test('Please tick the checkbox to continue', value => value === true)
    .required('Please tick the checkbox to continue'),
});


const SignUpForm = () => (
  <FormContainer>
    <FormWrapper>
    <FormText>Yes Mate! Please send me all the offers</FormText>
    <Formik
      initialValues={{
        name: '',
        email: '',
        consent: false,
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        setTimeout(() => {
           // submit them do the server. do whatever you like!
           alert(JSON.stringify(values, null, 2));
        }, 1000);
        console.log(values);
        }}> {({ errors, touched }) => (
        <Form>
          <Field name="name" placeholder="Name" />
            {errors.name && touched.name ? (
               <div>{errors.name}</div>
             ) : null}
          <Field name="email" type="email" placeholder="Email"/>
             {errors.email && touched.email ? (
               <div>{errors.email}</div>
             ) : null}
          <GDPR>I agree with the <a href='#'>Privacy Policy, </a><a href='#'>T&Cs</a> and agree for House of FODE to send me their amazing offers</GDPR>
          <Field name="consent" type="checkbox" />
            {errors.consent && touched.consent ? (
               <div>{errors.consent}</div>
             ) : null}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      )}
    </Formik>
    </FormWrapper>
  </FormContainer>
);

export default SignUpForm */
