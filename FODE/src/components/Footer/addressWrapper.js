import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import email from "../../images/mail.svg";
import {
  Copyright,
  Address,
  Divider,
  SocialWrapper,
  Icon,
  Anchor
} from "./footerStyles";
import { color } from "../../GlobalCss/variables";

const AddressWrapper = ({ data }) => (
  <React.Fragment>
    <Address>
      {data.site.siteMetadata.name}
      <br />
      {data.site.siteMetadata.street}
      <br />
      {data.site.siteMetadata.city}
      <br />
      {data.site.siteMetadata.country}
      <br />
    </Address>
    <Divider />
    <Anchor color={color.white} href={`mailto:${data.site.siteMetadata.email}`}>
      {data.site.siteMetadata.email}
    </Anchor>
    <SocialWrapper>
      <a
        href={data.site.siteMetadata.fb}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={facebook} alt="Facebook Link" />
      </a>
      <a
        href={data.site.siteMetadata.insta}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={instagram} alt="Instagram Link" />
      </a>
      <a href={`mailto:${data.site.siteMetadata.email}`}>
        <Icon src={email} alt="Email Link" />
      </a>
    </SocialWrapper>
    <Copyright
      color={color.white}
      href="https://rkkcreative.xyz"
      target="_blank"
      rel="noopener noreferrer"
    >
      © {new Date().getFullYear()}, Fly or Die Enterprises developed by RKK
      Creative
      {` `}
    </Copyright>
  </React.Fragment>
);

export default props => (
  <StaticQuery
    query={graphql`
      query addressQuery {
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
    render={data => <AddressWrapper data={data} {...props} />}
  />
);

AddressWrapper.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        name: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        fb: PropTypes.string.isRequired,
        insta: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

AddressWrapper.defaultProps = {
  name: "FLY OR DIE ENTERPRISES",
  street: "Such and Such St",
  city: "London",
  country: "UK",
  email: "info@fode.org.uk",
  fb: "https://www.facebook.com/houseoffode/",
  insta: "https://www.instagram.com/houseoffode/"
};
