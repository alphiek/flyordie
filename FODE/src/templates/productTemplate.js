import React from "react"
import { graphql } from "gatsby"
import { CardWrapper, RangeIcon, Divider, SalesInfo, ImgWrapper } from '../components/Product/productCardStyles'
import Footer from "../components/Footer/footer"
import Form from '../components/Form/form'
import { Pattern, ContentContainer } from '../globalStyles/containers'
import patternLight from '../images/repeating-pattern.svg'
import { color } from '../globalStyles/variables'

export default ({ data }) => (
  <React.Fragment>
  <Pattern bgColor={color.secondary} background={patternLight} padding justify="space-around">
    <ImgWrapper src={data.datoCmsProduct.image.url} alt={data.datoCmsProduct.image.alt}/>
      <CardWrapper>
          <RangeIcon src={data.datoCmsProduct.icon.url} alt={data.datoCmsProduct.icon.alt}></RangeIcon>
          <Divider/>
          <SalesInfo>
          <h1>{data.datoCmsProduct.range}</h1>
          <p>{data.datoCmsProduct.info}</p>
          <h2>{data.datoCmsProduct.itemtype}</h2>
          <p>{data.datoCmsProduct.price}.00</p>
          </SalesInfo>
      <button
       className="snipcart-add-item"
       data-item-id={data.datoCmsProduct.id}
       data-item-custom3 name={data.datoCmsProduct.range}
       data-item-name={data.datoCmsProduct.itemtype}
       data-item-price={data.datoCmsProduct.price}
       data-item-url={ `https://localhost:8000${data.datoCmsProduct.slug}` }
       data-item-custom1-name="Colour"
       data-item-custom1-options="Black|White|Navy"
       data-item-custom1-value="Navy"
       data-item-custom2-name="Size"
       data-item-custom2-options="Small|Medium|Large"
       data-item-custom2-value="Medium">
      Buy Now
    </button>
    </CardWrapper>
    </Pattern>
    <Form />
    <Footer />
    </React.Fragment>
  )

  export const query = graphql`
    query ProductQuery($slug: String!) {
      datoCmsProduct(slug: { eq: $slug }) {
        id
        icon {
          url
          alt
        }
        range
        info
        itemtype
        image {
          url
          alt
        }
        price
      }
    }
  `
