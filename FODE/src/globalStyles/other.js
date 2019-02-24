import styled from 'styled-components'
import { color, fontSize, spacing, weight } from './variables'

export const Anchor = styled.a`
  font-size: ${fontSize.small};
  letter-spacing: ${spacing.wide};
  color: ${props => props.color};
  text-transform: ${props => props.transform ? "uppercase" : "none" }
`

export const Title = styled.h1`
  font-size: ${fontSize.large};
  color: ${color.primary};
  text-transform: uppercase;
  font-weight: ${weight.semib};
  letter-spacing: ${spacing.slim};
`
