import styled from "styled-components";
import { Title } from "../../GlobalCss/other";
import { color, fontSize, spacing } from "../../GlobalCss/variables";

export const Flex = styled.div`
  display: flex;
`;
export const RangeTitle = styled(Title)`
  color: ${color.dullred};
  font-size: ${fontSize.medsmall};
`;
export const CardWrapper = styled(Flex)`
  width: 20vw;
  padding: 2.5em;
  flex-direction: column;
  align-items: center;
  text-align: left;
  height: auto;
  background-color: white;
`;
export const RangeWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  background-color: ${color.primary};
  margin-bottom: 0.5em;
`;
export const RangeIcon = styled.img`
  position: absolute;
  width: 6em;
`;

export const Divider = styled.hr`
  width: 100%;
  height: 0.15em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  background-color: ${color.dullblue};
`;

export const SalesInfo = styled.div``;

export const ImgWrapper = styled.img`
  width: 20vw;
  border-top: 0.2em dashed ${color.primary};
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 5em;
  margin-right: 5em;
  width: 80em;
  margin-bottom: 5em;
`;

export const RangeButton = styled.button`
  float: right;
  padding-left: 1em;
  padding-right: 1em;
  font-size: ${fontSize.xsmall};
  text-transform: uppercase;
  background-color: ${color.white};
  color: ${color.primary};
  border: none;
  letter-spacing: ${spacing.wide};
`;
