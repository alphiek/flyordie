import styled from "styled-components";
import { color, fontSize, spacing, weight } from "../../GlobalCss/variables";
import Img from 'gatsby-image'

export const Flex = styled.div`
  display: flex;
`;

export const BodyText = styled.p`
  font-size: ${fontSize.body};
  letter-spacing: ${spacing.med};
  line-height: 140%;
  @media (max-width: 991px) {
    font-size: ${fontSize.medsmall};
  }
`;
export const Subheading = styled.h2`
  font-size: ${fontSize.medsmall};
  color: ${color.primary};
  text-transform: uppercase;
  font-weight: ${weight.semib};
  letter-spacing: ${spacing.slim};
`;

export const ItemWrapper = styled(Flex)`
  justify-content: space-around;
  align-items: stretch;
  width: 80vw;
  margin-bottom: 5em;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    width: 70vw;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    width: 90vw;
  }
`;

export const RangeTitle = styled.h1`
  color: ${color.dullred};
  font-size: ${fontSize.medsmall};
  margin-bottom: 0.5em;
  @media (max-width: 991px) {
    font-size: ${fontSize.base};
    text-transform: uppercase;
    font-weight: ${weight.semib};
    letter-spacing: ${spacing.slim};
  }
`;
export const CardWrapper = styled(Flex)`
  width: 27%;
  padding: 2em;
  flex-direction: column;
  align-items: center;
  text-align: left;
  height: auto;
  background-color: white;
  z-index:4;
  margin-left: 3vw;
  border-radius: 0.2em;
  @media (max-width: 991px) {
    flex-direction: row;
    width: 85%;
    margin-left: 0;
    margin-top: 1.5em;
  }
  @media (max-width: 479px) {
    margin-top: 3em;
  }
`;
export const RangeWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  margin-bottom: 0.5em;
  z-index: 4;
  @media (max-width: 991px) {
    width: 5em;
    height: 5em;
    margin-right: 2em;
  }
`;

export const ProductInfo = styled.div`
@media (max-width: 991px) {
  width: 70%;
}
@media (max-width: 479px) {
  width: 100%;
}
`;


export const RangeIcon = styled.img`
  position: absolute;
  min-width: 4.4em;
  bottom: -0.6em;
  left: -0.6em;
  @media (max-width: 991px) {
min-width: 6em;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  height: 0.15em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  background-color: ${color.dullblue};
`;

export const SalesInfo = styled.div`
width: 100%;
@media (max-width: 991px) {
display: flex;
flex-direction: row;
}
@media (max-width: 479px) {
  flex-direction: column;
}
`;

export const ImgWrapper = styled(Img)`
  width: 23%;
  padding: 1em;
  z-index: 4;
  @media (max-width: 991px) {
    width:30%;
  }
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
  @media (max-width: 991px) {
    font-size: ${fontSize.body};

}
`;
