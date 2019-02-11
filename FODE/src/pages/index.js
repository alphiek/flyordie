import React from "react"
import { Link } from "gatsby"
import { GlobalStyle } from '../theme/globalStyle'
import '../components/repeating-pattern.css'
import styled from 'styled-components'

export const LinkWrap = styled.div`
  display: flex;
  width: 15em;
  font-size: 1rem;
  align-items: center;
`

const IndexPage = () => (
  <div className="pattern-dark fullscreen">
  <GlobalStyle />
    <h1>We all die but not all of us fly</h1>
    <LinkWrap>
    <Link to="/shop/">Shop</Link>
    <Link to="/newarrivals/">New Arrivals</Link>
    </LinkWrap>
  </div>
)

export default IndexPage
