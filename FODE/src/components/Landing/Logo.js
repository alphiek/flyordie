import React from 'react'
import styled from 'styled-components'
import logolanding from "../../images/logoLanding.svg";

const LogoImg = styled.img`
  width: 75%;
  margin-top: 17%;
  margin-bottom: 6%;
  transform: rotate(-8.9deg);
  transform-origin: 50% 50%;

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {
   width: 80% !important;
   margin-top: 25% !important;
}

  @media (max-width: 1280px) {
  width: 70%;
  margin-bottom: 2em;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    margin-bottom: 8%;
    margin-top: 18%;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
    margin-top: 15%;
  }

  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape){
    margin-top: 28.5%;
    width: 80%;
  }

  @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
    margin-top: 18%;
    width: 80%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 1.3em;
    margin-top: 22%;
}
`;

const Logo = () => {
  return (
    <LogoImg src={logolanding} alt="FODE Logo" />
  )
}

export default Logo
