import React, { Component } from 'react';
import { AnchorNav, Cart, Items, SnipcartContainer, HeaderWrapper, BurgerMenu, CartWrapper, TopLine, MidLine, BottomLine } from './headerStyles'
import cart from "../../images/cartnew.svg"
import Nav from '../Nav/nav'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden (e) {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <React.Fragment>
      <HeaderWrapper>
        {!this.state.isHidden && <Nav navToggle={this.toggleHidden}/>}
        <BurgerMenu onClick={this.toggleHidden}>
          <TopLine />
          <MidLine />
          <BottomLine />
        </BurgerMenu>
        <SnipcartContainer>
          <AnchorNav href="#" className="snipcart-edit-profile">New Account</AnchorNav>
          <AnchorNav href="#" className="snipcart-user-profile">Log-in</AnchorNav>
          <CartWrapper>
            <a href="www.#.com" className="snipcart-checkout">
              <Cart src={cart} alt="Checkout Icon"></Cart>
            </a>
            <div className="snipcart-summary">
              <Items className="snipcart-total-items"></Items>
            </div>
          </CartWrapper>
        </SnipcartContainer>
       </ HeaderWrapper>
       </React.Fragment>
    )
  }
}


export default Header
