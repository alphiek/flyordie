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
  ItemWrapper
} from "../components/Product/productCardStyles";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import { Pattern } from "../GlobalCss/containers";
import patternLight from "../images/repeating-pattern.svg";
import { color } from "../GlobalCss/variables";
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Slider from 'react-slick'


const settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,

}

export default ({ data }) => (
  <React.Fragment>
    <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags} >
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </HelmetDatoCms >
    <Pattern bgColor={color.secondary} background={patternLight} padding justify="center" >
      <ItemWrapper>
      <div style={{ width: '70%', height: '20em', paddingLeft: '1em', paddingRight:'1em', zIndex: '6'}}>
      <Slider {...settings}>
      {
        data.datoCmsProduct.gallery.map((item) => {
          console.log(item.fluid.src, item.alt)
          return (
            <div key={data.datoCmsProduct.id}>
            <img style={{ width: '15em', margin: '0.5em'}} alt={item.alt} src={item.fluid.src} />
            <p style={{ padding: '0.5em', backgroundColor: 'white', height: '3em'}}>{item.title}</p>
             </div>)
        })
       }
        </Slider>
        </div>
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
              data-item-custom1-options={data.datoCmsProduct.colours}
              data-item-custom2-name="Size"
              data-item-custom2-options={data.datoCmsProduct.sizes}
              data-item-custom3-name="Variants"
              data-item-custom3-options={data.datoCmsProduct.gender}
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
      gender
      sizes
      colours
      itemtype
      gallery {
        title
        alt
        fluid(maxWidth: 600, imgixParams: { fm: "png", auto: "compress" }) {
          src
          ...GatsbyDatoCmsFluid
        }
      }
      shopdescription
      price
    }
  }
`;
