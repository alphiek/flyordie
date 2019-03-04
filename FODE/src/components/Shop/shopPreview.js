import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import { ShopItem, MasonryWrapper, InfoWrapper, ProductDesc, Divider } from './shopPreviewStyles'
import Masonry from 'react-masonry-component'
import styled from 'styled-components'
import { color, fontSize } from '../../GlobalCss/variables'

const ShopLink = styled(Link)`
  font-size: ${fontSize.xsmall};
  text-transform: uppercase;
  margin-top: 0;
  padding: 0;
  color: ${color.primary};
  line-height: 160%;
`

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
            }
          }
        }
      }
    `}
    render={data => (
      <MasonryWrapper>
      <Masonry>
        {data.allDatoCmsProduct.edges.map(({ node: product }) => (
          <ShopItem key={product.id} >
            <div>
              <InfoWrapper>
              <ProductDesc>{product.shopdescription}</ProductDesc>
              <Divider />
              <ShopLink to={`${product.slug}`} >SHOP</ShopLink>
              </InfoWrapper>
              <Link to={`${product.slug}`} >
                <img src={product.image.url} alt={product.image.alt} />
              </Link>
                </div>
              </ShopItem>
          ))}
          </Masonry>
        </MasonryWrapper>
    )}
  />
)

export default ShopPreview
