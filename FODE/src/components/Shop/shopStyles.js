import styled from "styled-components";
import { Title } from "../../GlobalCss/other";
import { weight } from "../../GlobalCss/variables";

export const TitleShop = styled(Title)`
  letter-spacing: 0;
  line-height: 115%;
  text-align: left;
  font-weight: ${weight.normal};
`;
export const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Circle = styled.div`
  position: relative;
  height: 10em;
  width: 10em;
  margin-left: 9em;
  margin-top: -1.5em;
  border-radius: 50%;
  background-color: white;
`;

export const Fode = styled.img`
  position: absolute;
  width: 13em;
  z-index: 2;
  margin-top: -1.5em;
  margin-left: 7em;
  transform: rotate(-6.21deg);
  transform-origin: 50% 100%;
`;

export const IntroWrapper = styled.div`
  padding-top: 0.3em;
  width: 26em;
  position: relative;
  top: -6em;
  left: 13em;
  border-top: 0.25em dashed #1e2d51;
`;
