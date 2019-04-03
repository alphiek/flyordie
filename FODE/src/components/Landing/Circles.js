import React from 'react'
import styled from 'styled-components'
import { color } from "../../GlobalCss/variables";

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
`;

const Circle = styled(Flex)`
  border-radius: 50%;
  box-shadow: 0px 0px 15px 2px #000;
  margin: 0;

`;

const OuterCircle = styled(Circle)`
  margin-left: -10em;
  background-color: ${color.primary};
  width: 65vw;
  height: 65vw;
  z-index: 3;

    @media (max-width: 1280px) {
      width: 80vh;
      height: 80vh;
    }

    @media (min-width: 1025px) and (max-width: 1279px) {
      width: 100vh;
      height: 100vh;
      margin-left: 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      margin-left: 0;
      width: 80vh;
      height:  80vh;
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
      width: 100vh;
      height: 100vh;
      margin-left: 0;
    }

    @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
      width: 100vh;
      height: 100vh;
      margin-left: 0;
    }

    @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
      width: 80vh;
      height: 80vh;
      margin-left: 0;
    }

     @media (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
      width: 70vh;
      height: 70vh;
      margin-left: 0;
  }
`;


const MiddleCircle = styled(Circle)`
  background-color: ${color.lightred};
  width: 57vw;
  height: 57vw;
  z-index: 4;

      @media (max-width: 1280px) {
        width: 70vh;
        height: 70vh;
      }

      @media (min-width: 1025px) and (max-width: 1279px) {
        width: 85vh;
        height: 85vh;
      }

      @media (min-width: 768px) and (max-width: 1024px) {
        width: 70vh;
        height: 70vh;
      }

      @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
        width: 85vh;
        height: 85vh;
      }

      @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
        width: 85vh;
        height: 85vh;
      }

      @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
        width: 70vh;
        height: 70vh;
        margin-left: 0;
      }

       @media (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
        width: 60vh;
        height: 60vh;
      }
`;


const FrontCircle = styled(Circle)`
  position: relative;
  background-color: ${color.lightblue};
  width: 49vw;
  height: 49vw;
  z-index: 6;

    @media (max-width: 1280px) {
      width: 60vh;
      height: 60vh;
    }

    @media (min-width: 1025px) and (max-width: 1279px) {
      width: 70vh;
      height: 70vh;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      width: 60vh;
      height: 60vh;
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
      width: 70vh;
      height: 70vh;
    }

    @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape){
      width: 70vh;
      height: 70vh;
    }

    @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
      width: 60vh;
      height: 60vh;
      margin-left: 0;
    }

     @media (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
      width: 50vh;
      height: 50vh;
  }
`;

const WhiteInner = styled(Circle)`
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${color.white};
  width: 41vw;
  height: 41vw;
  z-index: 7;

    @media (max-width: 1280px) {
      width:50vh;
      height:50vh;
    }

    @media (min-width: 1025px) and (max-width: 1279px) {
      width: 55vh;
      height: 55vh;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      width: 50vh;
      height: 50vh;
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
      width: 55vh;
      height: 55vh;
    }

    @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
      width: 55vh;
      height: 55vh;
    }

    @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
      width: 50vh;
      height: 50vh;
      margin-left: 0;
    }

      @media (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
        width: 40vh;
        height: 40vh;
    }
`;

export const ThreeCircles = ({children}) => {
  return (
    <OuterCircle>
      <MiddleCircle>
        <FrontCircle>
          {children}
        </FrontCircle>
      </ MiddleCircle>
    </ OuterCircle>
  )
};

export const WhiteCircle = ({children}) => {
  return (
    <WhiteInner>
      {children}
    </WhiteInner>
  )
}
