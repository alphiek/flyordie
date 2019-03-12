import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import {
  ShopItem,
  InfoContainer,
  Blurb,
  OptionsText,
  MasonryWrapper,
  OptionsParent,
  InfoWrapper,
  ProductDesc,
  Divider,
  RangeFlex,
  OptionsFlex,
  RangeSelector,
  RangeIcon
} from "./shopPreviewStyles";
import Masonry from "react-masonry-component";
import styled from "styled-components";
import { color, fontSize } from "../../GlobalCss/variables";

const ShopLink = styled(Link)`
  font-size: ${fontSize.xsmall};
  text-transform: uppercase;
  margin-top: 0;
  padding: 0;
  color: ${color.primary};
  line-height: 160%;
`;

const ShopPreview = () => (
  <StaticQuery
    query={graphql`
      query ShopQuery {
        allDatoCmsProduct {
          edges {
            node {
              id
              itemtype
              slug
              shopdescription
              image {
                url
                alt
              }
              icon {
                alt
                url
              }
              range
            }
          }
        }
      }
    `}
    render={data => (
      <div>
      <RangeFlex>
      <InfoContainer>
        <Blurb>
          All our products are made and designed in the UK, Created from Eco
          Friendly Fabrics and Materials. We support Mind UK and are
          committed that with every purchase a portion of the proceeds are
          donated to this amazing charity to help others.
        </Blurb>
      </InfoContainer>
      <OptionsParent>        
        <OptionsFlex>
          {data.allDatoCmsProduct.edges.map(({ node: product }) => (
            <RangeSelector key={product.id}>
              <RangeIcon src={product.icon.url} alt={product.icon.alt} />
            </RangeSelector>
          ))}
        </OptionsFlex>
        <OptionsText>Select range to see options available</OptionsText>
        </OptionsParent>
      </RangeFlex>
      <MasonryWrapper>
        <Masonry>
          {data.allDatoCmsProduct.edges.map(({ node: product }) => (
            <ShopItem key={product.id}>
              <div>
                <InfoWrapper>
                  <ProductDesc>{product.shopdescription}</ProductDesc>
                  <Divider />
                  <ShopLink to={`${product.slug}`}>SHOP</ShopLink>
                </InfoWrapper>
                <Link to={`${product.slug}`}>
                  <img src={product.image.url} alt={product.image.alt} />
                </Link>
              </div>
            </ShopItem>
          ))}
        </Masonry>
      </MasonryWrapper>
      </div>
    )}
  />
);

export default ShopPreview;
