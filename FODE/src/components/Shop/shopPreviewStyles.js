import styled from "styled-components";
import { color, fontSize, spacing } from "../../GlobalCss/variables";
import { BodyText, Subheading } from "../../GlobalCss/other";

export const OptionsParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -6em;
`

export const InfoContainer = styled.div`
  width: 27vw;
  padding: 1.5em;
  text-align: left;
  background-color: ${color.primary};
  margin-left: 4em;
  position: relative;
  top: -4em;
`;

export const Blurb = styled(BodyText)`
color: ${color.secondary};
`;

export const OptionsText = styled(Subheading)`
  color: ${color.lightblue};
  text-align: left;
  width: auto;
  text-align: left;
  margin-top: 1em;
  padding: 0.5em;
  line-height: 140%;
  letter-spacing: ${spacing.reg};
`;


export const RangeFlex = styled.div`
display: flex;
flex-direction: row;
background-color: ${color.primary};
margin-top: 4em;
`;

export const OptionsFlex = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 50vw;
margin: 1em;
`;

export const RangeSelector = styled.div`
    border-radius: 0.2em;
    height: 5em;
    width: 5em;
    margin: 0.5em;
    position: relative;
`;
export const RangeIcon = styled.img`
  width: 6em;
  position: absolute;
  transform: scale(2);
  top: -0.2em;
`;

export const ShopItem = styled.div`
  position: relative;
  text-align: center;
  background-color: ${color.white};
  margin: 0.3em;
  width: 20%;
  padding: 0.5em;
`;

export const MasonryWrapper = styled.div`
  padding-left: 5em;
  padding-right: 3em;
  padding-bottom: 3em;
  margin: 0 auto;
  background-color: ${color.primary};
  z-index: 2;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  height: auto;
  width: auto;
  bottom: 1.5em;
  left: 0;
  background: white;
  text-align: left;
  padding: 0.2em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductDesc = styled.h6`
  color: ${color.primary};
  font-weight: bold;
  font-size: ${fontSize.xsmall};
  line-height: 70%;
`;
export const Divider = styled.hr`
  margin-top: 0.5em;
  margin-bottom: 0;
  width: 1.5em;
  height: 0.1em;
  background: ${color.primary};
`;
