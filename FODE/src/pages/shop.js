import React from "react";
import Footer from "../components/Footer/footer";
import ShopPreview from "../components/Shop/shopPreview";
import Form from "../components/Form/form";
import RangeSearch from "../components/RangeSearch/rangeSearch";
import {
  TitleShop,
  TitleWrapper,
  Fode,
  Circle,
  IntroWrapper
} from "../components/Shop/shopStyles";
import { Pattern } from "../GlobalCss/containers";
import { color } from "../GlobalCss/variables";
import patternLight from "../images/repeating-pattern.svg";
import shopTitle from "../images/shoptitle.svg";

const Shop = () => (
  <React.Fragment>
    <Pattern bgColor={color.secondary} background={patternLight} padding>
      <TitleWrapper>
        <Fode src={shopTitle} alt="House of Fode Logo" />
        <Circle />
        <IntroWrapper>
          <TitleShop>
            Exisiting to deliver everything you need to look Fresh, Stylish and
            Fly!
          </TitleShop>
        </IntroWrapper>
        <RangeSearch />
        <ShopPreview />
      </TitleWrapper>
    </Pattern>
    <Form />
    <Footer />
  </React.Fragment>
);

export default Shop;
