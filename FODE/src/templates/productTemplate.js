import React from "react";
import { graphql } from "gatsby";
import {
  CardWrapper,
  RangeButton,
  RangeWrapper,
  RangeTitle,
  RangeIcon,
  Divider,
  SalesInfo,
  ImgWrapper,
  ItemWrapper
} from "../components/Product/productCardStyles";
import Footer from "../components/Footer/footer";
import Form from "../components/Form/form";
import { Pattern } from "../GlobalCss/containers";
import { BodyText, Subheading } from "../GlobalCss/other";
import patternLight from "../images/repeating-pattern.svg";
import { color } from "../GlobalCss/variables";

export default ({ data }) => (
  <React.Fragment>
    <Pattern bgColor={color.secondary} background={patternLight} padding>
      <ItemWrapper>
        <ImgWrapper
          src={data.datoCmsProduct.image.url}
          alt={data.datoCmsProduct.image.alt}
        />
        <CardWrapper>
          <SalesInfo>
            <RangeWrapper>
              <RangeIcon
                src={data.datoCmsProduct.icon.url}
                alt={data.datoCmsProduct.icon.alt}
              />
            </RangeWrapper>
            <RangeTitle>{data.datoCmsProduct.range}</RangeTitle>
            <BodyText>{data.datoCmsProduct.info}</BodyText>
            <Divider />
            <Subheading>{data.datoCmsProduct.itemtype}</Subheading>
            <BodyText>£{data.datoCmsProduct.price}.00</BodyText>
            <Divider />
            <RangeButton
              className="snipcart-add-item"
              data-item-id={data.datoCmsProduct.id}
              data-item-custom3
              name={data.datoCmsProduct.range}
              data-item-name={data.datoCmsProduct.itemtype}
              data-item-price={data.datoCmsProduct.price}
              data-item-url={`https://localhost:8000${
                data.datoCmsProduct.slug
              }`}
              data-item-custom1-name="Colour"
              data-item-custom1-options="Black|White|Navy"
              data-item-custom1-value="Navy"
              data-item-custom2-name="Size"
              data-item-custom2-options="Small|Medium|Large"
              data-item-custom2-value="Medium"
            >
              Add to Cart
            </RangeButton>
          </SalesInfo>
        </CardWrapper>
      </ItemWrapper>
    </Pattern>
    <Form />
    <Footer />
  </React.Fragment>
);

export const query = graphql`
  query ProductQuery($slug: String!) {
    datoCmsProduct(slug: { eq: $slug }) {
      id
      icon {
        url
        alt
      }
      range
      info
      itemtype
      image {
        url
        alt
      }
      price
    }
  }
`;
