import React, { Component } from 'react'
import styled from 'styled-components'

class Loading extends Component {
  constructor (props) {
    super (props);
    this.state = {
      sample: ''
    }
  }


  render() {
    return (
      <p>This is the Loader Message Component</p>
    )
  }
}

export default Loading 
