import React from 'react'
import styled from 'styled-components'
import { color, fontSize, weight, spacing } from "../../GlobalCss/variables";

const LandingTitle = styled.h1`
  font-size: ${fontSize.large};
  color: ${color.primary};
  text-transform: uppercase;
  font-weight: ${weight.semib};
  letter-spacing: ${spacing.slim};

  @media (max-width: 1280px) {
    width: 60%;
    text-align: center;
    line-height: 120%;
    margin-top: -0.6em;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {
  display: none;
}

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {
   font-size: 1.2em !important;
   margin-top: 0.1em !important;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
   font-size: 1.5em;
  }

  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
    display: block;
    font-size: 1.6em;
    width: 60%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
    font-size: 1em;
    width: 60%;
}`;


const Divider = styled.span`
  margin-top: 0.65em;
  margin-bottom: 0.65em;
  width: 21vw;
  height: 0.3em;
  background: ${color.primary};

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {
  display: none;
}

  @media (max-width: 1280px) {
    width: 10vw;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 10vw;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
    display: 10vw;
  }
`

const Title = (props) => {
  const show = props.divider
  return (
    <React.Fragment>
      <LandingTitle>We all die but not all of us fly!</LandingTitle>
      {show ? <Divider /> : null}
    </React.Fragment>
  )
}

export default Title
