import React from 'react';
import { AnchorNav, Cart, Items, SnipcartContainer, HeaderWrapper, BurgerMenu, Line, CartWrapper } from './headerStyles'
import cart from "../../images/cartnew.svg"

const Header = () => (
  <HeaderWrapper>
    <BurgerMenu >
      <Line />
      <Line />
      <Line />
    </BurgerMenu>
    <SnipcartContainer>
      <AnchorNav href="#" className="snipcart-edit-profile">New Account</AnchorNav>
      <AnchorNav href="#" className="">Log-in</AnchorNav>
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
)


export default Header
