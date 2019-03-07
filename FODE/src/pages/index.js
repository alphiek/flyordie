import React from "react";
import { Link } from "gatsby";
import {
  LandingWrapper,
  LandingTitle,
  CircleWrapper,
  SquBg,
  Squ,
  SquMob,
  LinkWrap,
  OuterCircle,
  MiddleCircle,
  FrontCircle,
  WhiteInner,
  Logo,
  Divider,
  LinkDivider
} from "../components/Landing/landingStyles";
import patternLight from "../images/repeating-pattern.svg";
import squadron from "../images/Squadron.svg";
import { color, fontSize, weight } from "../GlobalCss/variables";
import logolanding from "../images/logoLanding.svg";
import styled from "styled-components";

const LinkNew = styled(Link)`
  font-size: ${fontSize.largeLink};
  font-weight: ${weight.semib};
  color: ${color.dullblue};
  text-transform: uppercase;

  :hover {
    text-decoration: underline;
  }
`;

const LinkShop = styled(LinkNew)`
  color: ${color.dullred};
`;

const IndexPage = () => (
  <LandingWrapper column bgColor={color.secondary} background={patternLight}>
    <SquBg />
    <CircleWrapper>
      <OuterCircle>
        <MiddleCircle>
          <FrontCircle>
            <SquMob src={squadron} alt="Squadron Squirrel" />
            <WhiteInner>
              <Logo src={logolanding} alt="FODE Logo" />
              <LandingTitle>We all die but not all of us fly!</LandingTitle>
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
      <Squ src={squadron} alt="Squadron Squirrel" />
    </CircleWrapper>
  </LandingWrapper>
);

export default IndexPage;
