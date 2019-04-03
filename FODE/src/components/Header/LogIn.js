import React, { Component } from "react";
import styled from 'styled-components';
import { fontSize, spacing, color, weight } from "../../GlobalCss/variables";

const AnchorNav = styled.a`
  font-size: ${fontSize.body};
  letter-spacing: ${spacing.wide};
  color: ${color.primary};
  text-transform: uppercase;
  font-weight: ${weight.bold};
  padding-right: 2.5em;
  @media (max-width: 767px) {
    font-size: ${fontSize.body};
  }
`;

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("clicked");
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    let wordDisplay = this.state.isLoggedIn ? "LOG-OUT" : "LOG-IN";
    return (
      <AnchorNav
        onClick={this.handleClick}
        href="#"
        className={
          this.state.isLoggedIn
            ? "snipcart-user-logout"
            : "snipcart-user-profile"
        }
      >
        {wordDisplay}
      </AnchorNav>
    );
  }
}

export default LogIn;
