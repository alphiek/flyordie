import React from "react"

import { GlobalStyle } from '../theme/globalStyle'
import '../components/repeating-pattern.css'
import Footer from '../components/footer'
import PropTypes from "prop-types"

const Faqs = ({ data }) => (
  <div className="pattern-dark fullscreen">
  <GlobalStyle />
    <h1>This is the page for FAQS</h1>
    <p>Do we give a FAQ? Hell Yeah</p>
    <div>
    {data.allDatoCmsFaq.edges.map(({ node: faq }) => (
      <div key={faq.id} >
        <div>
          <h2>{faq.title}</h2>
          <p>{faq.help}</p>
          </div>
        </div>
      ))}

    </div>
    <Footer />
    </div>
)

export default Faqs

export const query = graphql`
  query FaqQuery {
    allDatoCmsFaq {
      edges {
        node {
          id
          title
          help
        }
      }
    }
  }
`
