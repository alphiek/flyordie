import styled from 'styled-components'
import { Wrapper } from '../../globalStyles/containers'
import { Anchor } from '../../globalStyles/other'
import { fontSize, spacing, color, weight } from '../../globalStyles/variables'

export const Logo = styled.img`
  padding-top: 5em;
  width: 6em;
`
export const Icon = styled.img`
  width: 1.4em;
  height: 1.4em;
`

export const Copyright = styled(Anchor)`
  font-size: 0.5em;
  padding-bottom: 6em;
  font-weight: ${weight.light};
  `

export const LinkWrapper = styled(Wrapper)`
  width: 30em;
  border-bottom: 0.25em dashed ${color.primary};
  padding-top: 1em;
  padding-bottom: 1em;
`
export const SocialWrapper = styled(Wrapper)`
  width: 6.5em;
  align-items: center;
`

export const LinkItem = styled.span`
  width: 10em;
  margin: 0 auto;
  text-align: center;
`

export const AddressWrapper = styled.address`
  font-size: ${fontSize.small};
  font-style: normal;
  color: ${color.secondary};
  letter-spacing: ${spacing.wide};
`

export const Divider = styled.span`
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  width: 1em;
  background-color: ${color.primary};
  height: 0.25em;
`
