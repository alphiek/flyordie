import React, { Component } from "react";
import FaqListItem from "./faqListItem";
import { Pattern } from "../../GlobalCss/containers";
import { FaqTitle, FaqHeadText } from "./faqStyles";
import patternLight from "../../images/repeating-pattern.svg";
import { color } from "../../GlobalCss/variables";

class FaqSection extends Component {
  render() {
    return (
      <Pattern
        column
        bgColor={color.secondary}
        background={patternLight}
        padding
      >
        <FaqTitle>FAQs</FaqTitle>
        <FaqHeadText>
          Check out our FAQ section for answers, Can't find what you are looking
          for? Just contact us for more info
        </FaqHeadText>
        <FaqListItem />
      </Pattern>
    );
  }
}

export default FaqSection;
