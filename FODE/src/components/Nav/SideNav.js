import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { color } from "../../GlobalCss/variables";

const NavContainer = styled.nav`
  height: 100vh;
  width: 4em;
  position: absolute;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 700;
  background-color: ${color.primary};
  transform: scaleY(1);
  transform-origin: bottom;
  @media screen only (max-width: 991px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: column;
  }
`

const LinkWrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const LinkRotate = styled.div`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  margin-top: 1.5em;
  margin-bottom: 2.5em;
  text-align: center;
`

export const Close = styled.div`
  text-align: center;
  padding-top: 0.2em;
  padding-bottom: 0.3em;
  top: 0;
  font-size: 3.5em;
  color: ${color.secondary};
  margin-bottom: 0.5em;
  cursor:pointer;
`

const NavLink = styled(Link)`
  color: ${color.lightblue};
  text-transform: uppercase;
  white-space: nowrap;
`

const activeStyle = {
  color: "white"
};

const SideNav = (props) => {
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

export default SideNav
