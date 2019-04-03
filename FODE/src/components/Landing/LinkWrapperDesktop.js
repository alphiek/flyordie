import React from 'react'
import { Link } from "gatsby";
import styled from 'styled-components'
import { color, fontSize, weight, spacing } from "../../GlobalCss/variables";

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
`;

export const LinkWrap = styled(Flex)`
  width: 10em;
`;

export const LinkDivider = styled.span`
  border-radius: 50%;
  height: 0.3em;
  width: 0.3em;
  background: ${color.primary};
  @media (max-width: 1280px) {
   display: none;
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

  @media (min-width: 481px) and (max-width: 767px) {
   display: none;
  }

  @media (min-width: 320px) and (max-width: 480px) {
   display: none;
  }


`;

const LinkNew = styled(LinkShop)`
  color: ${color.dullblue};

  @media (max-width: 1280px) {
    display: none;
  }
`;



const LinkWrapperDesktop = () => {
  return (
    <LinkWrap>
      <LinkNew to="/offers/">Offers</LinkNew>
      <LinkDivider />
      <LinkShop to="/shop/">Shop</LinkShop>
    </LinkWrap>
  )
}

export default LinkWrapperDesktop
