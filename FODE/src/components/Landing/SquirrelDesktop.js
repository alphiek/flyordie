import React from 'react'
import squadron from "../../images/Squadron.svg";
import styled from "styled-components";

const Squ = styled.img`
  width: 14em;
  top: 39vh;
  left: 65vw;
  position: absolute;
  z-index: 5;
`;

const SquirrelDesktop = () => {
  return (
    <Squ src={squadron} alt="Squadron Squirrel" />
  )
}

export default SquirrelDesktop
