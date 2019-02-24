import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from 'prop-types'
import { Logo, LinkWrapper, LinkItem, Copyright, AddressWrapper, Divider, SocialWrapper, Icon } from './footerStyles'
import { Pattern } from '../../globalStyles/containers'
import { Anchor } from '../../globalStyles/other'
import { color } from '../../globalStyles/variables'
import logoWhite from "../../images/logo-white.svg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import email from "../../images/mail.svg"
import styled from 'styled-components'
import patternDark from '../../images/repeating-white.svg'


const LinkUpper = styled(Link)`
  font-size: 0.6em;
  letter-spacing: 0.25em;
  color: hsl(0, 0%, 90%);
`

const Footer = ({ data }) => (
  <Pattern column bgColor={color.dullgreen} background={patternDark}>
    <Logo src={logoWhite} alt="House of Fode Logo"></Logo>
    <LinkWrapper>
      <LinkItem><Anchor transform color={color.secondary} href="#">Privacy</Anchor></LinkItem>
      <LinkItem><LinkUpper to="/faqs/" >FAQS</LinkUpper></LinkItem>
      <LinkItem><Anchor transform color={color.secondary} href="#">Terms of Use</Anchor></LinkItem>
    </LinkWrapper>
    <AddressWrapper>
      {data.site.siteMetadata.name}<br />
      {data.site.siteMetadata.street}<br />
      {data.site.siteMetadata.city}<br />
      {data.site.siteMetadata.country}<br />
    </AddressWrapper>
    <Divider />
      <Anchor color={color.secondary} href="#" target="_blank">{data.site.siteMetadata.email}</Anchor>
    <SocialWrapper>
      <a href={data.site.siteMetadata.fb} target="_blank" rel="noopener noreferrer"><Icon src={facebook} alt='Facebook Link'></Icon></a>
      <a href={data.site.siteMetadata.insta} target="_blank" rel="noopener noreferrer" ><Icon src={instagram} alt='Instagram Link'></Icon></a>
      <a href="mailto:" target="_blank" rel="noopener noreferrer" ><Icon src={email} alt='Email Link'></Icon></a>
    </SocialWrapper>
     <Copyright color={color.secondary} href="https://rkkcreative.xyz" target="_blank" rel="noopener noreferrer">
      © {new Date().getFullYear()}, Fly or Die Enterprises developed by RKK Creative
      {` `}
      </Copyright>
  </Pattern>
)

export default props => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            name
            street
            city
            country
            email
            fb
            insta
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)


Footer.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        name: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        fb: PropTypes.string.isRequired,
        insta: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
