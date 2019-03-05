import React from 'react';
import { FormSectionWrapper, FormWrapper, FormText, Input, Error, Consent, SubmitButton, ConsentLink } from './formStyles'
import { withFormik } from 'formik';
import * as Yup from 'yup';


const SignUp = ({
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
}) => (
  <FormSectionWrapper>
    <FormText>Yes! Send me all the offers!</FormText>
      <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="name">
          <Input
           type="text"
           onChange={handleChange}
           placeholder='Enter your Name'
           onBlur={handleBlur}
           value={values.name}
           name="name"
            />
          {errors.name && touched.name && <Error id="feedback">{errors.name}</Error>}
       </label>
       <label htmlFor="email">
          <Input
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name="email"
          placeholder="Enter your Email"
          />
          {errors.email && touched.email && <Error id="feedback">{errors.email}</Error>}
      </label>
      <label>
        <Consent>
          I agree with the
            <ConsentLink
            href="http://localhost:8000/static/terms-of-use-e595ca762c750a4691c0defcc8c70389.pdf"
            target="_blank"
            rel="noopener noreferrer"> T&CS,
            </ConsentLink>
            <ConsentLink
            href="http://localhost:8000/static/privacy-policy-51fa98b3823b6a3c01549f1a8329a7be.pdf"
            target="_blank"
            rel="noopener noreferrer"> Privacy Policy
            </ConsentLink> and that FODE can contact me regarding their most excellent forthcoming promos
         </Consent>
         {errors.consent && touched.consent && <Error id="feedback">{errors.consent}</Error>}
         <Input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={handleChange}
          onBlur={handleBlur}
          />
       </label>
       <SubmitButton type="submit">Submit</SubmitButton>
    </FormWrapper>
  </FormSectionWrapper>
)

const Form = withFormik({
 mapPropsToValues: () => ({
   name: '',
   email: '',
   consent: false
 }),
 validationSchema: Yup.object().shape({
   name: Yup.string()
   .min(3, 'Must be longer than 2 characters')
   .required('Required'),
   email: Yup.string()
   .email('Invalid email address')
   .required('Required'),
   consent: Yup.bool()
   .oneOf([true])
   .required("Consent must be checked"),
 }),

 handleSubmit: (values, { setSubmitting }) => {
   setTimeout(() => {
     alert(JSON.stringify(values, null, 2));
     setSubmitting(false);
     }, 1000);
    console.log(values);
   },

   displayName: 'Basic Form',
})(SignUp)

export default Form;
