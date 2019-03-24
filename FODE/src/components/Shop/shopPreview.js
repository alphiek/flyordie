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
      selectOptions: [],
      selected: ''
    }
    this.handleMatch = this.handleMatch.bind(this)
  }

componentDidMount() {
  let items = this.props.data.edges

  items.forEach(item => {
    this.setState(previous => ({
      shopData: [...previous.shopData, item],
    }),
    () => {
      this.setState({
       selectOptions: []
      }
      )
      const uniqueItems = [...this.state.shopData.reduce((set, item) => set.add(item.node.itemtype), new Set())]
      let myArray = Array.from(uniqueItems[0])
      myArray.forEach(item => {
        this.setState(previous => ({
          selectOptions: [...previous.selectOptions, item]
        }))
    })
  })
})
}

handleMatch(e) {
  e.preventDefault()
  let value = e.target.value
  console.log(value)
  this.setState({
    selected: value
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
          <Filter filterList={this.state.selectOptions} handleMatch={this.handleMatch}/>
        </InfoContainer>
      </RangeFlex>
      <Gallery galleryItems={this.state.shopData} selected={this.state.selected}/>
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
