import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import { Logo,  LinkWrapper, LinkChild, Anchor, AnchorLower, AnchorCopy, AddressWrapper, Divider, SocialWrapper, Icon } from './footerStyles'
import logoWhite from "../../images/logo-white.svg"
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import email from "../../images/mail.svg"
import styled from 'styled-components'


const LinkUpper = styled(Link)`
  font-size: 0.6em;
  letter-spacing: 0.25em;
  color: #e5e5e5;
  text-transform: uppercase;
  text-decoration: none;
`

const Footer = () => (
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
    render={data => (
      <footer className="pattern-light">
        <Logo src={logoWhite} alt="House of Fode Logo"></Logo>
        <LinkWrapper>
          <LinkChild><Anchor href="#" target="_blank">Privacy</Anchor></LinkChild>
          <LinkChild><LinkUpper to="/faqs/" >FAQS</LinkUpper></LinkChild>
          <LinkChild><Anchor href="#" target="_blank">Terms of Use</Anchor></LinkChild>
        </LinkWrapper>
        <AddressWrapper>
          {data.site.siteMetadata.name}<br />
          {data.site.siteMetadata.street}<br />
          {data.site.siteMetadata.city}<br />
          {data.site.siteMetadata.country}<br />
        </AddressWrapper>
        <Divider />
          <AnchorLower href="#" target="_blank">{data.site.siteMetadata.email}</AnchorLower>
        <SocialWrapper>
          <a href={data.site.siteMetadata.fb} target="_blank"><Icon src={facebook} alt='Facebook Link'></Icon></a>
          <a href={data.site.siteMetadata.insta} target="_blank"><Icon src={instagram} alt='Instagram Link'></Icon></a>
          <a href="mailto:" target="_blank"><Icon src={email} alt='Email Link'></Icon></a>
        </SocialWrapper>
         <AnchorCopy href="https://rkkcreative.xyz">
          © {new Date().getFullYear()}, Fly or Die Enterprises developed by RKK Creative
          {` `}
          </AnchorCopy>
      </footer>
    )}
  />
)

export default Footer
