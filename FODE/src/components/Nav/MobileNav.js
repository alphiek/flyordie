import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { color } from "../../GlobalCss/variables";

const NavContainer = styled.nav`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 700;
  background-color: ${color.primary};
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkRotate = styled.div`
  margin-top: 1.5em;
  margin-bottom: 2.5em;
  text-align: center;

  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
    margin-top: 0.7em;
    margin-bottom: 0.7em;
  }
`

export const Close = styled.div`
  text-align: center;
  padding-top: 0.2em;
  padding-bottom: 0.3em;
  font-size: 3.5em;
  color: ${color.secondary};
  margin-bottom: 0.5em;
  cursor:pointer;

  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
    padding-bottom: 0.1em;
    margin-bottom: 0.2em;
  }
`;

const NavLink = styled(Link)`
  color: ${color.lightblue};
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.5em;

  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
    font-size: 1em;
  }
`

const activeStyle = {
  color: "white"
};

const MobileNav = (props) => {
  return (
    <NavContainer>
     <NavWrapper>
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
     </NavWrapper>
    </NavContainer>
  )
}

export default MobileNav
