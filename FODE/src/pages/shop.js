import React from "react"
import Footer from "../components/Footer/footer"
import ShopPreview from "../components/Shop/shopPreview"
import Form from "../components/Form/form"
import { TitleShop, TitleWrapper, Fode, Circle, IntroWrapper, Blurb } from "../components/Shop/shopStyles"
import { Pattern } from '../globalStyles/containers'
import { color } from '../globalStyles/variables'
import patternLight from '../images/repeating-pattern.svg'
import shopTitle from '../images/shoptitle.svg'


const Shop = () => (
  <React.Fragment>
  <Pattern bgColor={color.secondary} background={patternLight} padding>
    <TitleWrapper>
      <Fode src={shopTitle} alt="House of Fode Logo"></Fode>
      <Circle />
      <IntroWrapper>
        <TitleShop>Exisiting to deliver everything you need to look Fresh, Stylish and Fly!</TitleShop>
      </IntroWrapper>
      <Blurb>Some information</Blurb>
      <ShopPreview />
    </TitleWrapper>
  </Pattern>
  <Form />
  <Footer />
  </React.Fragment>
)

export default Shop
