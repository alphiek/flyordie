import React from 'react'
import styled from 'styled-components'
import cart from "../../images/cartnew.svg";
import { color } from "../../GlobalCss/variables";


const CartWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
`;

const Cart = styled.img`
  width: 2.16em;
`;

export const Items = styled.span`
  position: absolute;
  top: 25%;
  left: -1em;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background-color: ${color.white};
  color: ${color.primary};
  text-align: center;
  line-height: 140%;
`;


const SnipcartCheckout = () => {
  return (
    <CartWrapper>
      <a href="www.#.com"
         rel="noopener noreferrer"
         className="snipcart-checkout">
        <Cart src={cart} alt="Checkout Icon" />
      </a>
      <div className="snipcart-summary">
        <Items className="snipcart-total-items" />
      </div>
    </CartWrapper>
  )
}

export default SnipcartCheckout
