import React from 'react'
import { Pattern } from "../../GlobalCss/containers";
import patternLight from "../../images/repeating-pattern.svg";
import { color } from "../../GlobalCss/variables";
import { Link } from 'gatsby'
import logoholding from "../../images/logoholding.svg";
import styled from 'styled-components'


const Logo = styled.img`
  width: 10em;
  padding-bottom: 1em;
`
const Title = styled.h1`
  color: ${color.primary};
  padding-bottom: 1em;
`
const Message = styled.p`
  padding-bottom: 1em;
`
const LinkWrapper = styled.div`
  background-color: ${color.primary};
  width: 15em;
  padding: 1em;
  border-radius: 0.2em;
`

const Error = ({ data }) => (
  <Pattern
    column
    bgColor={color.secondary}
    background={patternLight}
    padding
    style={{height: '100vh'}}>
      <Logo src={logoholding} alt='Fode Logo' />
      <Title>NOT FOUND</Title>
      <Message>You just hit a route that doesn&#39;t exist... the sadness.</Message>
      <LinkWrapper>
      <Link to='/' style={{ color: color.white }}>Return to the Home Page</Link>
      </LinkWrapper>
  </Pattern>
);

export default Error
