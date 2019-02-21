import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import { ShopWrapper, ShopItem } from './shopPreviewStyles'

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
              price
              image {
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
      <ShopWrapper>
        {data.allDatoCmsProduct.edges.map(({ node: product }) => (
          <ShopItem key={product.id} >
            <div>
              <Link to={`${product.slug}`} >
                <img src={product.image.url} />
              </Link>
                <h6>
                  <Link to={`${product.slug}`}>{product.price}</Link>
                </h6>
                </div>
              </ShopItem>
          ))}
          </ShopWrapper>
        </div>
    )}
  />
)

export default ShopPreview
