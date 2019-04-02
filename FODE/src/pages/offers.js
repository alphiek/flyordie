import React from "react";

import { Pattern } from "../GlobalCss/containers";
import patternLight from "../images/repeating-pattern.svg";
import { color } from "../GlobalCss/variables";
import Footer from "../components/Footer/Footer";

const Offers = () => (
  <React.Fragment>
    <Pattern column bgColor={color.secondary} background={patternLight} padding style={{ height: '15em'}}>
      <h1>This is the page for Offers</h1>
    </Pattern>
    <Footer />
  </React.Fragment>
);

export default Offers;
