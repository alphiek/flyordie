import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { NavContainer, Close, LinkWrapper, LinkRotate } from "./navStyles";
import { color, fontSize } from "../../GlobalCss/variables";
import styled from 'styled-components'


const NavLink = styled(Link)`
  color: ${color.lightblue};
  text-transform: uppercase;
  white-space: nowrap;
  @media (max-width: 991px) {
    font-size: ${fontSize.largeLink};
  }
`;

const activeStyle = {
  color: "white"
};

class Nav extends Component {
  console.log(this.props)
  render() {
    return (
      <NavContainer onMouseLeave={this.props.navToggle} >
        <Close onClick={this.props.navToggle} >&times;</Close>
        <LinkWrapper>
          {props.menuLinks.map(link => (
            <LinkRotate key={link.name}>
              <NavLink
              to={link.link}
              activeStyle={activeStyle}
              onClick={this.props.navToggle}>
                {link.name}
              </NavLink>
            </LinkRotate>
          ))}
        </LinkWrapper>
      </NavContainer>
    )
  }
}


export default () => (
  <StaticQuery
  query={graphql`
    query NavTestQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `}
    render={data => <Nav links={data.site.siteMetadata} />}
  />
);
