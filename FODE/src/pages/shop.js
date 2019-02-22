import React from "react"
import styled from 'styled-components'
import Footer from "../components/Footer/footer"
import ShopPreview from "../components/Shop/shopPreview"
import { GlobalStyle } from '../theme/globalStyle'
import '../components/repeating-pattern.css'
import shopTitle from '../images/shoptitle.svg'

const TitleWrapper = styled.div`
  position: relative;
  padding-top: 4em;
  padding-bottom: 3em;
  font-size: 1rem;
`

const Circle = styled.div`
  position: relative;
  height: 10em;
  width: 10em;
  margin-left: 7em;
  border-radius: 50%;
  background-color: white;
`

const Fode = styled.img`
  position: absolute;
  width: 15em;
  z-index: 2;
  margin-left: 5em;
  transform: rotate(-6.21deg);
  transform-origin: 50% 100%;
`

const IntroWrapper = styled.div`
   padding-top: 0.5em;
   width: 28em;
   position: relative;
   top: -5.2em;
   left: 11em;
   border-top: 0.25em dashed #1e2d51;
`

const ShopIntro = styled.h1`
   text-transform: uppercase;
   text-align: center;
`

const Shop = () => (
  <div className="pattern-dark">
  <GlobalStyle />
    <TitleWrapper>
    <Fode src={shopTitle} alt="House of Fode Logo"></Fode>
    <Circle />
    <IntroWrapper>
    <ShopIntro>Exisiting to deliver everything you need to look Fresh, Stylish and Fly!</ShopIntro>
    </IntroWrapper>
    </TitleWrapper>
    <ShopPreview />
  <Footer />
  </div>
)

export default Shop
