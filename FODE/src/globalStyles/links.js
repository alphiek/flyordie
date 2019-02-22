import styled from 'styled-components'
import { fontSize, spacing } from './variables'

export const Anchor = styled.a`
  font-size: ${fontSize.small};
  letter-spacing: ${spacing.wide};
  color: ${props => props.color};
  text-transform: ${props => props.transform ? "uppercase" : "none" }
`
