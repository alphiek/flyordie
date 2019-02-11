import styled from 'styled-components'

export const Logo = styled.img`
  margin: 0 auto;
  padding-top: 5em;
  width: 6em;
  `

export const Anchor = styled.a`
  font-size: 0.6em;
  letter-spacing: 0.25em;
  color: #e5e5e5;
  text-transform: uppercase;
  text-decoration: none;
`

export const AnchorLower = styled(Anchor)`
  text-transform: none;
  `

export const AnchorCopy = styled(AnchorLower)`
    font-size: 0.55em;
    padding-bottom: 6em;
    `
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30em;
  border-bottom: 0.25em dashed #1e2d51;
  padding-top: 2em;
  padding-bottom: 1em;
  margin-bottom: 1em;
`
export const LinkChild = styled.span`
  width: 10em;
  margin: 0 auto;
  text-align: center;
`

export const AddressWrapper = styled.address`
  margin: 0 auto;
  padding: 0;
  text-align: center;
  font-size: 0.6rem;
  font-style: normal;
  color: #e5e5e5;
  letter-spacing: 0.25em;
`

export const Divider = styled.span`
  margin-top: 1em;
  margin-bottom: 1em;
  width: 1em;
  background-color: #1e2d51;
  height: 0.25em;
`
export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 8em;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
`
export const Icon = styled.img`
  margin: 0 auto;
  max-width: 3.5em;
  display: block;
  width: 1.8em;
  height: 1.8em;
`
