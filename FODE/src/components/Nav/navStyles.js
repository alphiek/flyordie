import styled from 'styled-components'
import { color } from '../../GlobalCss/variables'

export const NavContainer = styled.nav`
  height: 100vh;
  width: 4em;
  position: absolute;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 700;
  background-color: ${color.primary};
  transform: scaleY(1);
  transform-origin: bottom;
`

export const LinkWrapper = styled.div`
  height:70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const LinkRotate = styled.div`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  margin-top: 2em;
  margin-bottom: 2.5em;
  width: 4em;
  text-align: center;
`

export const Close = styled.div`
  text-align: center;
  padding-top: 0.2em;
  padding-bottom: 0.3em;
  top: 0;
  font-size: 3.5em;
  color: ${color.secondary};
  margin-bottom: 0.8em;
`
