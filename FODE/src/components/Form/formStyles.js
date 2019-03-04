import styled from 'styled-components'
import { fontSize, spacing, color, weight } from '../../GlobalCss/variables'

export const ConsentLink = styled.a`
  color: ${color.secondary};
  text-decoration: underline;
`

export const FormSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color ${color.primary};
  padding-top: 13em;
  padding-bottom: 5em;
  margin-top: -12em;

`

export const FormWrapper = styled.form`
  position: relative;
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  border: 0.25em dashed ${color.lightgreen};

  @media (max-width: 767px) {
  width: 75vw;
  }
  @media (max-width: 479px) {
  width: 80vw;
}
`

export const FormText = styled.p`
  color: ${color.secondary};
  font-weight: ${weight.light};
  font-size: ${fontSize.medium};
  letter-spacing: ${spacing.std};
  text-align: center;
  margin-bottom: 1em;
`

export const Input = styled.input`
  width: 40vw;
  line-height: 200%;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
  text-transform: uppercase;
  font-size: ${fontSize.xsmall};
  font-weight: ${weight.semib};
  background: ${color.secondary};
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
  @media (max-width: 767px) {
  width: 65vw;
  }
  @media (max-width: 479px) {
  width: 70vw;
}
`

export const Error = styled.p`
  font-size: ${fontSize.small};
  margin: 0.15em;
  font-weight: ${weight.light};
  color: ${color.secondary};
`
export const Consent = styled.p`
  color: ${color.secondary};
  font-size: ${fontSize.small};
  font-weight: ${weight.normal};
  line-height: 135%;
  text-align: center;
  margin-top: 0.5em;
  @media (max-width: 767px) {
  width: 65vw;
  }
  @media (max-width: 479px) {
  width: 70vw;
}
`
export const Checkbox = styled.input`

`

export const SubmitButton = styled.button`
  padding: 0;
  margin: 0 auto;
  position: relative;
  margin-top: -2.5em;
  bottom: -3.2em;
  border-radius: 50%;
  border: 0.15em solid ${color.secondary};
  width: 4em;
  height: 4em;
  background-color: ${color.primary};
  color: ${color.secondary};
  font-weight: 300;
  font-size: ${fontSize.medsmall};
`
