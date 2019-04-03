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
`;

export const TopLine = styled.span`
  width: 100%;
  height: 7px;
  background-color: ${color.primary};
  transition: 0.5s;

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
