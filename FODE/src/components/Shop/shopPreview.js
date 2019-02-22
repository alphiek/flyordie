import React from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import { ShopItem } from './shopPreviewStyles'
import Masonry from 'react-masonry-component'

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
                alt
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
      <Masonry>
        {data.allDatoCmsProduct.edges.map(({ node: product }) => (
          <ShopItem key={product.id} >
            <div>
              <Link to={`${product.slug}`} >
                <img src={product.image.url} alt={product.image.alt} />
              </Link>
                <h6>
                  <Link to={`${product.slug}`}>{product.price}</Link>
                </h6>
                </div>
              </ShopItem>
          ))}
          </Masonry>
        </div>
    )}
  />
)

export default ShopPreview
