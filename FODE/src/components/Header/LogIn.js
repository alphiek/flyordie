import React, { Component } from "react";
import { AnchorNav } from "./headerStyles";

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
