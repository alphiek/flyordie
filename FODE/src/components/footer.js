import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import logoWhite from "../images/logo-white.svg"
import { StaticQuery, graphql } from "gatsby"

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
      <footer className="pattern-dark">
        <img src={logoWhite} alt="House of Fode Logo" />
        <div className="link-wrapper">
          <span><a href="#" target="_blank">Privacy</a></span>
          <span><Link to="/faqs/">FAQS</Link></span>
          <span><a href="#" target="_blank">Terms of Use</a></span>
        </div>
        <address>
          {data.site.siteMetadata.name}<br />
          {data.site.siteMetadata.street}<br />
          {data.site.siteMetadata.city}<br />
          {data.site.siteMetadata.country}<br />
        </address>
        <span>Divider</span>
          <a href="#" target="_blank">{data.site.siteMetadata.email}</a>
        <div className="social-wrapper">
          <span><a href={data.site.siteMetadata.fb} target="_blank">FB</a></span>
          <span><a href={data.site.siteMetadata.insta} target="_blank">Insta</a></span>
          <span><a href="#" target="_blank">Email</a></span>
        </div>
        <div>
          © {new Date().getFullYear()}, Fly or Die Enterprises developed by
          {` `}
          <a href="https://rkkcreative.xyz">RKK Creative</a>
        </div>
      </footer>
    )}
  />
)

export default Footer
