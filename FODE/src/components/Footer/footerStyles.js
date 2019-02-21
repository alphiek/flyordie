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
`

export const AnchorLower = styled(Anchor)`
  text-transform: none;
`

export const AnchorCopy = styled(AnchorLower)`
    font-size: 0.5em;
    padding-bottom: 6em;
    font-weight: 300;
    `
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30em;
  border-bottom: 0.25em dashed #1e2d51;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 1em;
  margin-top: 1em;
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
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  width: 1em;
  background-color: #1e2d51;
  height: 0.25em;
`
export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6.5em;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
`
export const Icon = styled.img`
  margin: 0 auto;
  display: block;
  width: 1.4em;
  height: 1.4em;
`
