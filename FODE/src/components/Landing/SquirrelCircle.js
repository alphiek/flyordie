import React from 'react'
import styled from 'styled-components'
import { color } from "../../GlobalCss/variables";

const SquBg = styled.div`
  width: 15em;
  height: 15em;
  position: absolute;
  top: 40vh;
  left: 63vw;
  z-index: 1;
  background-color: ${color.white};
  border-radius: 50%;
`;

const SquirrelCircle = () => {
  return (
    <SquBg />
  )
}

export default SquirrelCircle
