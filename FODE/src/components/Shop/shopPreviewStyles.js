import styled from 'styled-components'
import { color, fontSize } from '../../GlobalStyles/variables'

export const ShopItem = styled.div`
  position: relative;
  text-align: center;
  background-color: ${color.white};
  margin: 0.3em;
  width: 20%;
  padding: 0.5em;
`

export const MasonryWrapper = styled.div`
  padding-left: 3em;
  padding-right: 3em;
  padding-bottom: 3em;
  margin:0 auto;
  border: 1px solid black;

`

export const InfoWrapper = styled.div`
 position: absolute;
 height: auto;
 width: auto;
 bottom: 1.5em;
 left: 0;
 background: white;
 text-align: left;
 padding: 0.2em 1em;
 display: flex;
 flex-direction: column;
 justify-content: center;
`

export const ProductDesc = styled.h6`
  color: ${color.primary};
  font-weight: bold;
  font-size: ${fontSize.xsmall};
  line-height:70%;
`
export const Divider = styled.hr`
   margin-top: 0.5em;
   margin-bottom: 0;
   width: 1.5em;
   height: 0.10em;
   background: ${color.primary};
`
