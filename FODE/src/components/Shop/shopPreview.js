import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Gallery from './Masonry'
import Filter from './Filter'

import {
  InfoContainer,
  Blurb,
  RangeFlex,
} from "./shopStyles";


class ShopPreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopData: [],
      selectOptions: []
    }
  }

componentDidMount() {
  let items = this.props.data.edges

  items.forEach(item => {
    this.setState(previous => ({
      shopData: [...previous.shopData, item]
    }),
    () => {
      const uniqueItems = [...this.state.shopData.reduce((set, item) => set.add(item.node.itemtype), new Set())]
      uniqueItems.forEach(item => {
        this.setState({
          selectOptions: item
        })
      })
    })
  })
}

render () {
  return (
    <div>
      <RangeFlex>
        <InfoContainer>
          <Blurb>
            All our products are made and designed in the UK, Created from Eco
            Friendly Fabrics and Materials. We support Mind UK and are
            committed that with every purchase a portion of the proceeds are
            donated to this amazing charity to help others.
            </Blurb>
          <Filter />
        </InfoContainer>
      </RangeFlex>
      <Gallery galleryItems={this.state.shopData} />
    </div>
  )
}
}


export default () => (
  <StaticQuery
    query={graphql`
      query ShopQuery {
        allDatoCmsProduct {
          edges {
            node {
              id
              shopdescription
              range
              itemtype
              image {
                url
                alt
              }
              shopdescription
              slug
            }
          }
        }
      }
    `}
    render={data => <ShopPreview data={data.allDatoCmsProduct} />}
  />
)
