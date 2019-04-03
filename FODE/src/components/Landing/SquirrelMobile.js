import React from 'react'
import styled from 'styled-components'
import squadron from "../../images/Squadron.svg";

const SquMob = styled.img`
  width: 10em;
  top: -1.8em;
  position: absolute;
  z-index: 5;

  @media (max-width: 1280px) {
    display: block;
    right: 5.5em;
    top: -3em;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {
    width: 7em;
    top: -2em;
}

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    top: -5em;
    width: 14em;
  }

  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape){
    width: 8em;
    top: -2em;
    right: 4.5em;
  }

  @media (min-width: 481px) and (max-width: 767px) and (orientation: portrait) {
    width: 12em;
    top: -4em;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    top: -4em;
}
`;

const SquirrelMobile = () => {
  return (
    <SquMob src={squadron} alt="Squadron Squirrel" />
  )
}

export default SquirrelMobile
