import React from "react"

import { Pattern } from '../GlobalCss/containers'
import patternLight from '../images/repeating-pattern.svg'
import { color } from '../GlobalCss/variables'
import Footer from '../components/Footer/footer'

const NewArrivals = () => (
  <React.Fragment>
  <Pattern column bgColor={color.secondary} background={patternLight} padding>
    <h1>This is the page for New Arrivals</h1>
  </Pattern>
  <Footer />
  </React.Fragment>
)

export default NewArrivals
