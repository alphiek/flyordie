import React from "react"
import { Link } from "gatsby"
import { GlobalStyle } from '../theme/globalStyle'
import '../components/repeating-pattern.css'

const IndexPage = () => (
  <div className="pattern-dark fullscreen">
  <GlobalStyle />
    <h1>We all die but not all of us fly</h1>
    <div>
    <Link to="/shop/">Shop</Link>
    <Link to="/newarrivals/">New Arrivals</Link>
    </div>
  </div>
)

export default IndexPage
