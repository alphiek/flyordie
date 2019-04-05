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

  @media (min-width: 768px) and (max-width: 1024px) {
   height: 3.5em;
   width: 3.5em;
  }
  @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
    height: 3.5em;
    width: 3.5em;
  }
  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
    height: 3.5em;
    width: 3.5em;
  }
  @media (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
    height: 3.5em;
    width: 3.5em;
  }
`;

const Cart = styled.img`
  width: 2.16em;

  @media (min-width: 768px) and (max-width: 1024px) {
   width: 3em;
   margin-top: 0.5em;
  }

  @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
    width: 3em;
    margin-top: 0.5em;
  }
  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
    width: 2.5em;
    margin-top: 0.3em;
  }
  @media (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
    margin-top: 0.3em;
    height: 2.4em;
    width: 2.4em;
  }
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

  @media (min-width: 768px) and (max-width: 1024px) {
   height: 1.6em;
   width: 1.6em;
   left: -1.5em;
   font-size: 1.6em;
  }
  @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
    height: 1.5em;
    width: 1.5em;
    left: -1.3em;
    font-size: 1.6em;
  }
  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
    height: 1.4em;
    width: 1.4em;
    left: -1em;
    font-size: 1.4em;
  }

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
