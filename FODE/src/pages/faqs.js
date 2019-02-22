import React from "react"
import { GlobalStyle } from '../theme/globalStyle'
import '../components/repeating-pattern.css'
import Footer from '../components/Footer/footer'
import styled from 'styled-components'
import { graphql } from 'gatsby'

const FaqWrapper = styled.div`
  padding-top: 5em;
  padding-bottom: 3em;
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const FaqItem = styled.div`
  width: 30%;
  margin: 1.5em;
  text-align: center;
`

const PageWrapper = styled.div`
  padding-top: 5em;
  margin: 0 auto;
  text-align: center;
`

const Faqs = ({ data }) => (
  <div className="pattern-dark">
  <GlobalStyle />
  <PageWrapper>
    <h1>This is the page for FAQS</h1>
    <p>Do we give a FAQ? Hell Yeah</p>
    <FaqWrapper>
    {data.allDatoCmsFaq.edges.map(({ node: faq }) => (
      <FaqItem key={faq.id} >
        <div>
          <h2>{faq.title}</h2>
          <p>{faq.help}</p>
          </div>
        </FaqItem>
      ))}
    </FaqWrapper>
    <Footer />
    </PageWrapper>
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
