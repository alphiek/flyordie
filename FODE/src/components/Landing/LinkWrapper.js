import React from 'react'
import { Link } from "gatsby";
import styled from 'styled-components'
import { color, fontSize, weight } from "../../GlobalCss/variables";

const LinkWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  width: 10em;
`;

const LinkDivider = styled.span`
  border-radius: 50%;
  height: 0.3em;
  width: 0.3em;
  background: ${color.primary};
  }`;


const LinkShop = styled(Link)`
  font-size: ${fontSize.largeLink};
  font-weight: ${weight.semib};
  color: ${color.dullred};
  text-transform: uppercase;

  :hover {
    text-decoration: none;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {
  display: none;
}

  @media (min-width: 768px) and (max-width: 1024px) {
   font-size: 1.7em;
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)  {
   font-size: 1.6em;
  }
`;

const LinkNew = styled(LinkShop)`
  color: ${color.dullblue};
`;


const MobileLinkContainer = styled.div`
  height: 6em;
  background-color: ${color.primary};
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 481px) and (max-width: 767px) and (orientation: landscape) {
    display: none;
  }

`
const LinkMobile = styled(Link)`
  font-size: ${fontSize.largeLink};
  font-weight: ${weight.semib};
  color: ${color.lightblue};
  z-index: 8;
  text-transform: uppercase;
`

export const LinkWrapperDesktop = (props) => {
  const show = props.linkNew
  return (
    <LinkWrap>
      {
        show ?
        <React.Fragment>
          <LinkNew to="/offers/">Offers</LinkNew>
          <LinkDivider />
        </React.Fragment>
        :
        null
      }
      <LinkShop to="/shop/">Shop</LinkShop>
    </LinkWrap>
  )
}

export const ShopLinkMobile = () => {
  return (
    <MobileLinkContainer>
       <LinkMobile to='/shop'>Shop</LinkMobile>
    </MobileLinkContainer>
  )
}
