import styled from "styled-components";
import { color, fontSize, weight, spacing } from "../../GlobalCss/variables";

export const LandingTitle = styled.h1`
  font-size: ${fontSize.large};
  color: ${color.primary};
  text-transform: uppercase;
  font-weight: ${weight.semib};
  letter-spacing: ${spacing.slim};
   @media (max-width: 991px) {
   width: 9em;
   text-align: center;
   line-height: 120%;
   margin-top: -0.5em;
  }
  @media (max-width: 479px) {
   width: 8em;
   margin-top: -0.8em;
 }
 @media screen
     and (max-width: 480px)
     and (max-height:800px)
     and (orientation:landscape) {
       display: none;
     }
     @media (max-height: 500px) {
       display: none;
     }
`;

export const LandingWrapper = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.column ? "column" : "row")};
  background-color: ${props => props.bgColor};
  background-image: ${props => `url(${props.background})`};
  background-repeat: repeat;
  background-size: 90px 90px;
  overflow: hidden;
  height: 100vh;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
export const Circle = styled(Flex)`
  border-radius: 50%;
  box-shadow: 0px 0px 15px 2px #000;
  margin: 0;
`;

export const OuterCircle = styled(Circle)`
  margin-left: -10em;
  background-color: ${color.primary};
  width: calc(400px + 43vw);
  height: calc(400px + 43vw);
  z-index: 3;

  @media (max-width: 1200px) {
    margin-left: -5em;
  }
  @media (max-width: 991px) {
    margin-left: 0em;
  }
  @media (max-height:550px) {
    width:110vh;
    height:110vh;
  }
`;
export const MiddleCircle = styled(Circle)`
  background-color: ${color.lightred};
  width: calc(330px + 39vw);
  height: calc(330px + 39vw);
  z-index: 4;
  @media (max-height:550px) {
    width:95vh;
    height:95vh;
  }
`;
export const FrontCircle = styled(Circle)`
  background-color: ${color.lightblue};
  width: calc(260px + 35vw);
  height: calc(260px + 35vw);
  z-index: 6;
  @media (max-height:550px) {
    width:80vh;
    height:80vh;
  }
`;
export const WhiteInner = styled(Circle)`
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${color.white};
  width: calc(190px + 31vw);
  height: calc(190px + 31vw);
  z-index: 7;
  @media (max-height:550px) {
    width:65vh;
    height:65vh;
  }
`;
export const Logo = styled.img`
  width: 20em;
  margin-top: 4.5em;
  margin-bottom: 2em;
  transform: rotate(-8.9deg);
  transform-origin: 50% 50%;
  @media (max-width: 991px) {
    margin-top: 4em;
  }
  @media (max-width: 767px) {
    width: 15em;
    margin-top: 3em;
  }
@media (max-height: 500px) {
  width: 10em;
}
`;
export const LinkWrap = styled(Flex)`
  width: 15em;
  @media (max-width: 991px) {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    height: 5em;
    width: 100%;
    background-color: ${color.primary};
    z-index: 1;
  }
`;
export const Divider = styled.span`
  margin-top: 0.65em;
  margin-bottom: 0.65em;
  width: 20em;
  height: 0.3em;
  background: ${color.primary};

  @media (max-width: 991px) {
    display: none;
  }
`;
export const LinkDivider = styled.span`
  transform: rotate(90deg);
  transform-origin: 50% 50%;
  height: 0.28em;
  width: 1.2em;
  background: ${color.primary};

  @media (max-width: 991px) {
    display: none;
  }
`;
export const SquBg = styled.div`
  width: 15em;
  height: 15em;
  position: absolute;
  top: 40vh;
  left: 63vw;
  z-index: 1;
  background-color: ${color.white};
  border-radius: 50%;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const Squ = styled.img`
  width: 14em;
  top: 39vh;
  left: 65vw;
  position: absolute;
  z-index: 5;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const SquMob = styled.img`
  width: 10em;
  bottom: 60%;
  left: 45vw;
  position: absolute;
  display: none;
  z-index: 5;
  @media (max-width: 991px) {
    display: block;
    left: 41vw;
  }
  @media (max-width: 767px) {
    bottom: 57%;
  }
  @media (max-width: 479px) {
    bottom: 53%;
  }
  @media (max-height: 550px) {
    width:35vh;
    height: auto;
  }
`;

export const CircleWrapper = styled.div`
  z-index: 2;
`;
