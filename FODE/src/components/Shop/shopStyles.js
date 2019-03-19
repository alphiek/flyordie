import styled from "styled-components";
import { color, fontSize, spacing, weight} from "../../GlobalCss/variables";


export const Wrapper = styled.div`
  position: relative;
`
export const TitleWrapper = styled(Wrapper)`
  width: 100%;
`;

export const Circle = styled(Wrapper)`
  height: 10em;
  width: 10em;
  margin-left: 9em;
  margin-top: -1.5em;
  border-radius: 50%;
  background-color: ${color.white};
  @media (max-width:991px) {
    margin-left: 6em;
  }
  @media (max-width: 767px) {
    margin-left: 3em;
  }
`;

export const IntroWrapper = styled(Wrapper)`
  padding-top: 0.3em;
  width: 26em;
  top: -6em;
  left: 13em;
  border-top: 0.25em dashed ${color.primary};
  @media (max-width:991px) {
    width: 24em;
    left: 10em;
    top: -6em;
  }
  @media (max-width: 767px) {
  width: 18em;
  left: 7em;
  top: -5.7em;
  }
  @media (max-width: 479px) {
    width: 12em;
    left: 3em;
    top: -5em;
  }
`;

export const ShopItem = styled(Wrapper)`
  text-align: center;
  background-color: ${color.white};
  margin: 0.5em;
  width: 20%;
  padding: 0.5em;
  z-index: 5;
  border-radius: 0.2em;
  @media (max-width: 1200px) {
    width:30%;
  }
  @media (max-width: 991px) {
    width:45%;
  }
  @media (max-width: 490px) {
    width: 100%;
  }
`;

export const MasonryWrapper = styled.div`
  padding-left: 8em;
  padding-right: 3em;
  padding-bottom: 3em;
  margin: 0 auto;
  background-color: ${color.primary};
  z-index: 4;
  @media (max-width: 1200px) {
      padding-left: 5.5em;
  }
  @media (max-width: 991px) {
    padding-left: 4em;
  }
  @media (max-width: 480px) {
    padding-left: 1.8em;
  }
`;



export const Flex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${color.primary};
  flex-direction: column;
`
export const InfoContainer = styled(Flex)`
  width: 60%;
  text-align: center;
  position: relative;
  padding: 1em;
  align-items: center;
  @media (max-width: 767px) {
    width: 80%;
  }
`
export const RangeFlex = styled(Flex)`
  flex-direction: row;
  height: 13em;
  margin-top:-2em;
  margin-bottom: -0.1em;
  padding-bottom: 2%;
  width: 100%;
  align-items: flex-end;
  -webkit-clip-path: polygon(0 15%, 100% 8%, 100% 100%, 0% 100%);
  clip-path: polygon(0 15%, 100% 8%, 100% 100%, 0% 100%);
  @media (max-width: 479px) {
    height: 16em;
    margin-top: -5em;
  }
  @media (max-width: 240px) {
    height: 19em;
  }
  `;

  export const InfoWrapper = styled(Flex)`
    position: absolute;
    height: auto;
    width: auto;
    bottom: 1.5em;
    left: 0;
    background: ${color.white};
    text-align: left;
    padding: 0.2em 1em;
    @media (max-width: 991px) {
      padding: 0.6em 0.8em;
    }
  `;

export const FilterDropdown = styled.select`
  width: auto;
  margin-top: 1.5em;
  display: block;
  padding: 0 0.2em;
`

export const ShopperLink = styled.a`
  font-size: ${fontSize.body};
  text-transform: uppercase;
  margin-top: 0;
  padding: 0;
  color: ${color.primary};
  line-height: 160%;
  @media (max-width: 991px) {
    font-size: ${fontSize.medsmall};
  }
`

export const Blurb = styled.p`
  color: ${color.secondary};
  font-size: ${fontSize.medsmall};
  letter-spacing: ${spacing.med};
  line-height: 140%;
`;

export const TitleShop = styled.h1`
  margin-bottom: 1em;
  font-size: ${fontSize.large};
  color: ${color.primary};
  text-transform: uppercase;
  line-height: 115%;
  text-align: left;
  font-weight: ${weight.normal};
`;

export const Fode = styled.img`
  position: absolute;
  width: 13em;
  z-index: 2;
  margin-top: -1.5em;
  margin-left: 7em;
  transform: rotate(-6.21deg);
  transform-origin: 50% 100%;
  @media (max-width:991px) {
    margin-left: 4em;
  }
  @media (max-width: 767px) {
    margin-left: 2em;
  }
`;

export const ProductDesc = styled.h2`
  color: ${color.primary};
  font-weight: ${weight.bold};
  font-size: ${fontSize.body};
  line-height: 120%;
  @media (max-width: 991px) {
    font-size: ${fontSize.medsmall};
  }
`;
export const Divider = styled.hr`
  margin-top: 0.3em;
  margin-bottom: 0;
  width: 1.5em;
  height: 0.1em;
  background: ${color.primary};
  @media (max-width: 991px) {
    height: 0.2em;
}
`;
