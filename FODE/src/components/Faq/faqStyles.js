import styled from "styled-components";
import { color, fontSize, spacing, weight } from "../../GlobalCss/variables";

export const BodyText = styled.p`
  font-size: ${fontSize.small};
  font-size: ${fontSize.body};
  letter-spacing: ${spacing.med};
  line-height: 140%;
  @media (max-width: 991px) {
    font-size: ${fontSize.medsmall};
  }
`
export const FaqText = styled(BodyText)`
  padding-top: 1em;
`;

export const FaqHeadText = styled(BodyText)`
  width: 65vw;
  @media (max-width: 767px) {
    width: 60vw;
  }
  @media (max-width: 479px) {
    width: 65vw;
  }
`;

export const FaqTitle = styled.h1`
  text-transform: none;
  margin-bottom: 1em;
  font-size: ${fontSize.large};
  color: ${color.primary};
  text-transform: uppercase;
  font-weight: ${weight.semib};
  letter-spacing: ${spacing.slim};
`;

export const FaqHeading = styled.h2`
  border-bottom: 0.2em solid ${props => props.color};
  padding-bottom: 0.5em;
  font-size: ${fontSize.body};
  color: ${color.primary};
  text-transform: uppercase;
  font-weight: ${weight.semib};
  letter-spacing: ${spacing.slim};
`;

export const FaqWrapper = styled.div`
  width: 68vw;
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 2.5em;
  margin-bottom: 2.2em;
  padding-bottom: 2.2em;
  padding-top: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${color.white};
  border-radius: 0.3em;
  z-index: 3;
  @media (max-width: 767px) {
    width: 75vw;
  }
  @media (max-width: 479px) {
    width: 80vw;
  }
`;
export const FaqItem = styled.div`
  position: relative;
  width: 60vw;
  margin: 0.5em 1em;
  text-align: center;
`;
export const InfoButton = styled.button`
  position: absolute;
  top: 1.1em;
  right: 0.5em;
  width: 2.5em;
  height: 1.6em;
  border-radius: 0.15em;
  margin-bottom: 0.5em;
  font-size: ${fontSize.xsmall};
  text-transform: uppercase;
  background-color: ${color.white};
  background-image: ${props => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: ${color.secondary};
  border: none;
  z-index: 1;
`;

export const Arrow = styled.img`
  width: 2em;
`;
