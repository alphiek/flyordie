import React from 'react'
import styled from "styled-components";
import { color } from "../../GlobalCss/variables";

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.7em;
  height: 1.25em;
  margin-left: 1em;
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1024px) {
   margin-top: 0.5em;
   height: 1.6em;
   width: 2.2em;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
    margin-top: 0.5em;
    height: 1.6em;
    width: 2.5em;
   }

   @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
     margin-top: 0.5em;
     height: 1.6em;
     width: 2.5em;
   }

   @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
     margin-top: 0.5em;
     height: 1.4em;
     width: 2em;
   }

   @media (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
     margin-top: 0.5em;
     height: 1.4em;
     width: 2em;
   }
`;

export const TopLine = styled.span`
  width: 100%;
  height: 7px;
  background-color: ${color.primary};
  transition: 0.5s;

  @media (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
    height: 6px;
  }

  ${BurgerMenu}: hover & {
    transform: scaleX(0.5);
    transform-origin: left;
  }
`;

export const MidLine = styled(TopLine)`
  ${BurgerMenu}: hover & {
    transform: scaleX(0.6);
  }
`;
export const BottomLine = styled(TopLine)`
  ${BurgerMenu}: hover & {
    transform: scaleX(0.7);
  }
`;


const Burger = (props) => {
  return (
    <BurgerMenu onClick={props.onClick}>
      <TopLine />
      <MidLine />
      <BottomLine />
    </BurgerMenu>
  )
}

export default Burger
