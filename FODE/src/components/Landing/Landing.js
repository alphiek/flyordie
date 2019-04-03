import React, { Component } from "react";
import styled from "styled-components";
import SquirrelCircle from './SquirrelCircle'
import SquirrelDesktop from './SquirrelDesktop'
import SquirrelMobile from './SquirrelMobile'
import { WhiteCircle, ThreeCircles } from './Circles'
import Logo from './Logo'
import LinkWrapperDesktop from './linkWrapperDesktop'

import patternLight from "../../images/repeating-pattern.svg";
import { color } from "../../GlobalCss/variables";

import {
  LandingTitle,
  Divider
} from "./landingStyles";


const LandingWrapper = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${color.secondary};
  background-image: ${props => `url(${props.background})`};
  background-repeat: repeat;
  background-size: 90px 90px;
  overflow: hidden;
  height: 100vh;
`;

const CircleWrapper = styled.div`
  z-index: 2;

  @media (min-width: 768px) and (max-width: 1024px) {
   margin-top: -10%;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
    margin-top: 0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: -20%;
}
`;


class Landing extends Component {
   constructor() {
     super();
     this.state = {
       squirrelCircle: true,
       squirrelDesktop: true,
       squirrelMobile: false
     }
     this.updatePredicate = this.updatePredicate.bind(this)
   }

componentDidMount() {
  this.updatePredicate();
  window.addEventListener('resize', this.updatePredicate)
}

componentWillUnmount() {
   window.removeEventListener("resize", this.updatePredicate);
}

updatePredicate() {
   this.setState({
     squirrelCircle: window.innerWidth >= 1280,
     squirrelDesktop: window.innerWidth >= 1280,
     squirrelMobile: window.innerWidth < 1280,
     linkWrapperDesktop: []
   });
}


  render() {
    return (
      <LandingWrapper background={patternLight}>
       {this.state.squirrelCircle ? <SquirrelCircle /> : null}
        <CircleWrapper>
          <ThreeCircles>
              {this.state.squirrelMobile ? <SquirrelMobile /> : null}
                <WhiteCircle>
                  <Logo />
                  <LandingTitle>We all die but not all of us fly!</LandingTitle>
                  <Divider />
                  <LinkWrapperDesktop />
                </WhiteCircle>
            </ ThreeCircles>
          {this.state.squirrelDesktop ? <SquirrelDesktop /> : null}
        </CircleWrapper>
      </LandingWrapper>
    )
  }
}

export default Landing;
