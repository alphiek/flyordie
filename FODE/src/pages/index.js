import React from "react"
import { Link } from "gatsby"
import { Title } from '../globalStyles/other'
import { LandingWrapper, CircleWrapper, SquBg, Squ, LinkWrap, OuterCircle, MiddleCircle, FrontCircle, WhiteInner, Logo, Divider, LinkDivider } from '../components/Landing/landingStyles'
import patternLight from '../images/repeating-pattern.svg'
import squadron from '../images/Squadron.svg'
import { color, fontSize, spacing, weight } from '../globalStyles/variables'
import logolanding from '../images/logoLanding.svg'
import styled from 'styled-components'

const LinkNew = styled(Link)`
  font-size: ${fontSize.largeLink};
  font-weight: ${weight.semib};
  color: ${color.dullblue};
  text-transform: uppercase;
`

const LinkShop = styled(LinkNew)`
  color: ${color.dullred};
`


const IndexPage = () => (
  <LandingWrapper column bgColor={color.secondary} background={patternLight}>
  <SquBg />
  <CircleWrapper>
    <OuterCircle>
      <MiddleCircle>
        <FrontCircle>
          <WhiteInner>
            <Logo src={logolanding} alt='FODE Logo' />
            <Title>We all die but not all of us fly!</Title>
            <Divider />
            <LinkWrap>
              <LinkNew to="/newarrivals/">New Arrivals</LinkNew>
              <LinkDivider />
              <LinkShop to="/shop/">Shop</LinkShop>
            </LinkWrap>
          </WhiteInner>
         </FrontCircle>
       </MiddleCircle>
    </OuterCircle>
    <Squ src={squadron} alt='Squadron Squirrel' />
  </CircleWrapper>

  </LandingWrapper>
)

export default IndexPage
