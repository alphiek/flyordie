import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from '../globalStyles/globalStyle'
import Header from "./Header/header"


const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
      <Header />
      <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
