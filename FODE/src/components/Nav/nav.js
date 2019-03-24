import React from "react";
import { Link } from 'gatsby'
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

const Nav = (props) => {
    return (
      <NavContainer onMouseLeave={props.navToggle} >
        <Close onClick={props.navToggle} >&times;</Close>
        <LinkWrapper onClick={props.navToggle}>
          {props.links.map(link => (
            <LinkRotate key={link.name}>
              <NavLink
              to={link.link}
              activeStyle={activeStyle}>
              {link.name}
              </NavLink>
            </LinkRotate>
          ))}
        </LinkWrapper>
      </NavContainer>
    )
  }

export default Nav
