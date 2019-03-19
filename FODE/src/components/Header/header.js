import React, { Component } from "react";
import {
  Cart,
  Items,
  SnipcartContainer,
  HeaderWrapper,
  BurgerMenu,
  CartWrapper,
  TopLine,
  MidLine,
  BottomLine
} from "./headerStyles";
import cart from "../../images/cartnew.svg";
import Nav from "../Nav/Nav";
import LogIn from "./LogIn";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden(e) {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderWrapper>
          {!this.state.isHidden && <Nav navToggle={this.toggleHidden} />}
          <BurgerMenu onClick={this.toggleHidden}>
            <TopLine />
            <MidLine />
            <BottomLine />
          </BurgerMenu>
          <SnipcartContainer>
            <LogIn />
            <CartWrapper>
              <a href="www.#.com" className="snipcart-checkout">
                <Cart src={cart} alt="Checkout Icon" />
              </a>
              <div className="snipcart-summary">
                <Items className="snipcart-total-items" />
              </div>
            </CartWrapper>
          </SnipcartContainer>
        </HeaderWrapper>
      </React.Fragment>
    );
  }
}

export default Header;
