import styled from 'styled-components'
import { color } from '../../globalStyles/variables'

export const LandingWrapper = styled.main`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.column ? "column" : "row"};
    background-color: ${props => props.bgColor};
    padding-top: ${props => props.padding ? "5em" : "0"};
    background-image: ${props => `url(${props.background})`};
    background-repeat: repeat;
    background-size: 90px 90px;
    overflow: hidden;
    height: 100vh;

`
export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`
export const Circle = styled(Flex)`
    border-radius:50%;
    box-shadow: 0px 0px 15px 2px #000;
    margin: 0;
`

export const OuterCircle = styled(Circle)`
    margin-left: -10em;
    background-color: ${color.primary};
    width:calc(400px + 43vw);
    height:calc(400px + 43vw);
    min-height: 600px;
    min-width: 600px;
    z-index: 3;
`
export const MiddleCircle = styled(Circle)`
    background-color: ${color.lightred};
    width:calc(330px + 39vw);
    height:calc(330px + 39vw);
    min-height: 480px;
    min-width: 480px;
    z-index: 4;
`
export const FrontCircle = styled(Circle)`
    background-color: ${color.lightblue};
    width:calc(260px + 35vw);
    height:calc(260px + 35vw);
    min-height: 360px;
    min-width: 360px;
    z-index: 6;
`
export const WhiteInner = styled(Circle)`
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${color.white};
    width:calc(190px + 31vw);
    height:calc(190px + 31vw);
    min-height: 240px;
    min-width: 240px;
    z-index: 7;
`
export const Logo = styled.img`
   width: 20em;
   margin-top: 4.5em;
   margin-bottom: 2em;
   transform: rotate(-8.9deg);
   transform-origin: 50% 50%;
`
export const LinkWrap = styled(Flex)`
   width: 15em;
`
export const Divider = styled.hr`
   margin-top: 0.65em;
   margin-bottom: 0.65em;
   width: 20em;
   height: 0.30em;
   background: ${color.primary};
`
export const LinkDivider = styled.hr`
   transform: rotate(90deg);
   transform-origin: 50% 50%;
   height: 0.30em;
   width: 1.3em;
   background: ${color.primary}
`
export const SquBg = styled.div`
   width: 15em;
   height: 15em;
   position: absolute;
   top: 40vh;
   left: 63vw;
   z-index: 1;
   background-color: ${color.white};
   border-radius: 50%;
`

export const Squ = styled.img`
  width: 14em;
  top: 39vh;
  left: 65vw;
  position: absolute;
  z-index: 5;
`

export const CircleWrapper = styled.div`
  z-index: 2;
`
