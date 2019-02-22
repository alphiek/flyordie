import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import patternLight from '../images/repeating-pattern.svg'
import { color } from '../globalStyles/variables'

const LinkWrap = styled.div`
  display: flex;
  width: 15em;
  font-size: 1rem;
  align-items: center;
`

const LandingWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.column ? "column" : "row"};
  background-color: ${props => props.bgColor};
  padding-top: ${props => props.padding ? "5em" : "0"};
  background-image: ${props => `url(${props.background})`};
  background-repeat: repeat;
  background-size: 90px 90px;
  overflow: hidden;
  height: 100vh;

`

const IndexPage = () => (
  <LandingWrapper column bgColor={color.secondary} background={patternLight} padding>
    <h1>We all die but not all of us fly</h1>
    <LinkWrap>
    <Link to="/shop/">Shop</Link>
    <Link to="/newarrivals/">New Arrivals</Link>
    </LinkWrap>
  </LandingWrapper>
)

export default IndexPage
