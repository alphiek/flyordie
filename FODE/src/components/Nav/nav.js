import React, { Component } from "react";
import { NavContainer, Close } from "./navStyles";
import NavItems from "./navItems";

class Nav extends Component {
  render() {
    return (
      <NavContainer onMouseLeave={this.props.navToggle} >
        <Close onClick={this.props.navToggle} >&times;</Close>
        <NavItems />
      </NavContainer>
    );
  }
}

export default Nav;
