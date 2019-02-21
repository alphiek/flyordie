import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  font-size: 1rem;
`

export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
`
export const SnipcartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15em;
  margin-right: 0.5em;
`

export const Cart = styled.img`
  margin: 0 auto;
  width: 2.16em;
`

export const Items = styled.span`
  position: absolute;
  top: 25%;
  left: -1em;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background-color: white;
  color: #1e2d51;
  text-align: center;
`

export const AnchorNav = styled.a`
  font-size: 0.6em;
  letter-spacing: 0.25em;
  color: #1e2d51;
  font-weight: 700;
  `

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2em;
  height: 1.25em;
  margin-left: 1em;
`
export const Line = styled.span`
  width: 100%;
  height: 0.25em;
  background-color: #1e2d51;
`
