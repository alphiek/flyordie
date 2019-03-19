import React from "react";
import PropTypes from "prop-types";
import { GlobalStyle } from "../GlobalCss/globalStyle";
import Header from "./Header/Header";

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
