import React from "react"
import { Link, graphql } from 'gatsby'

import Footer from "../components/Footer/footer"
import { GlobalStyle } from '../theme/globalStyle'
import '../components/repeating-pattern.css'

const Shop = ({ data }) => (
  <div className="pattern-dark">
  <GlobalStyle />
    <h1>Exisiting to deliver everything you need to look Fresh, Stylish and Fly</h1>
    <div>
      {data.allDatoCmsProduct.edges.map(({ node: product }) => (
        <div key={product.id} >
          <div>
            <Link to={`${product.slug}`} >
              <img src={product.image.url} />
            </Link>
              <h6>
                <Link to={`${product.slug}`}>{product.price}</Link>
              </h6>
            </div>
          </div>
        ))}
      </div>
  <Footer />
  </div>
)

export default Shop

export const query = graphql`
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
`
