import styled from 'styled-components'
import { Title } from '../../GlobalCss/other'
import { weight } from '../../GlobalCss/variables'


export const TitleShop = styled(Title)`
  letter-spacing: 0;
  line-height: 115%;
  text-align: left;
  font-weight: ${weight.normal}
`
export const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const Circle = styled.div`
  position: relative;
  height: 10em;
  width: 10em;
  margin-left: 7em;
  border-radius: 50%;
  background-color: white;
`

export const Fode = styled.img`
  position: absolute;
  width: 15em;
  z-index: 2;
  margin-left: 5em;
  transform: rotate(-6.21deg);
  transform-origin: 50% 100%;
`

export const IntroWrapper = styled.div`
   padding-top: 0.3em;
   width: 26em;
   position: relative;
   top: -5.4em;
   left: 11em;
   border-top: 0.25em dashed #1e2d51;
`
