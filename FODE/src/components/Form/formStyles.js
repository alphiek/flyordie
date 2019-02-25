import styled from 'styled-components'
import { fontSize, spacing, color, weight } from '../../globalStyles/variables'
import { SectionWrapper } from '../../globalStyles/containers'

export const FormSectionWrapper = styled(SectionWrapper)`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color ${color.primary};
  padding-top: 3em;
  padding-bottom: 5em;
`

export const FormWrapper = styled.form`
  position: relative;
  display: flex;
  padding: 1em;
  flex-direction: column;
  justify-content: center;
  width: 30em;
  border: 0.25em dashed ${color.lightgreen};
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
  width: 100%;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
  text-transform: uppercase;
  font-size: ${fontSize.xsmall};
  font-weight: ${weight.semib};
  background: ${color.secondary};
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
`

export const Error = styled.p`
  font-size: ${fontSize.small};
  margin: 0.15em;
  font-weight: ${weight.light};
  color: ${color.secondary};
`
export const Consent = styled.p`
  color: #e5e5e5;
  font-size: ${fontSize.medsmall};
  font-weight: ${weight.normal};
  line-height: 120%;
  text-align: center;
  margin-top: 0.5em;
`
export const Checkbox = styled.input`
  margin-bottom: 1.8em;
`

export const SubmitButton = styled.button`
  padding: 0;
  display: table-cell;
  vertical-align: middle;
  margin: 0 auto;
  position: absolute;
  bottom: -2em;
  left: 12.8em;
  border-radius: 50%;
  border: 0.15em solid ${color.secondary};
  width: 4em;
  height: 4em;
  background-color: ${color.primary};
  color: #e5e5e5;
  font-weight: 300;
`
