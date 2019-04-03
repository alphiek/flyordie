import styled from "styled-components";
import { color } from "../../GlobalCss/variables";

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0;
  top: 0;
  left: 0;
  position: absolute;
  padding: 0;
  z-index: 666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`;

export const Flex = styled.div`
  display: flex;
`;
export const CartWrapper = styled(Flex)`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
`;
export const SnipcartContainer = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  width: 7.5em;
  margin-right: 0.5em;
`;

export const BurgerMenu = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  width: 1.7em;
  height: 1.25em;
  margin-left: 1em;
  cursor: pointer;
`;

export const Cart = styled.img`
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


export const TopLine = styled.span`
  width: 100%;
  height: 0.25em;
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
