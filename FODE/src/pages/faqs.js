import React from "react"
import Footer from '../components/Footer/footer'
import Form from '../components/Form/form'
import { Pattern } from '../globalStyles/containers'
import patternLight from '../images/repeating-pattern.svg'
import { color } from '../globalStyles/variables'
import styled from 'styled-components'
import { graphql } from 'gatsby'

const FaqWrapper = styled.div`
  padding-top: 5em;
  padding-bottom: 3em;
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border
`
const FaqItem = styled.div`
  width: 30%;
  margin: 1.5em;
  text-align: center;
`


const Faqs = ({ data }) => (
  <React.Fragment>
  <Pattern column bgColor={color.secondary} background={patternLight} padding>
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
    </Pattern>
    <Form />
    <Footer />
  </React.Fragment>
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
