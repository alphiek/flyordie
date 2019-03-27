import React from "react";
import { graphql } from "gatsby";
import {
  BodyText,
  Subheading,
  CardWrapper,
  RangeButton,
  RangeWrapper,
  RangeTitle,
  RangeIcon,
  Divider,
  SalesInfo,
  ProductInfo,
  ImgWrapper,
  ItemWrapper
} from "../components/Product/productCardStyles";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import { Pattern } from "../GlobalCss/containers";
import patternLight from "../images/repeating-pattern.svg";
import { color } from "../GlobalCss/variables";
import { HelmetDatoCms } from 'gatsby-source-datocms'

export default ({ data }) => (
  <React.Fragment>
    <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags} />
    <Pattern bgColor={color.secondary} background={patternLight} padding justify="center" >
      <ItemWrapper>
        <ImgWrapper
          fluid={data.datoCmsProduct.image.fluid}
          alt={data.datoCmsProduct.image.alt}
        />
        <ImgWrapper
          fluid={data.datoCmsProduct.image.fluid}
          alt={data.datoCmsProduct.image.alt}
        />
        <ImgWrapper
          fluid={data.datoCmsProduct.image.fluid}
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
            <ProductInfo>
            <RangeTitle>{data.datoCmsProduct.range}</RangeTitle>
            <BodyText>{data.datoCmsProduct.info}</BodyText>
            <Divider />
            <Subheading>{data.datoCmsProduct.itemtype}</Subheading>
            <BodyText>£{data.datoCmsProduct.price}</BodyText>
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
            </ProductInfo>
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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      icon {
        url
        alt
      }
      range
      info
      itemtype
      image {
        alt
        fluid(maxWidth: 600, imgixParams: { fm: "png", auto: "compress" }) {
        ...GatsbyDatoCmsFluid
      }
      }
      price
    }
  }
`;
