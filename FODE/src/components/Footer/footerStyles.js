import styled from "styled-components";
import { fontSize, spacing, color, weight } from "../../GlobalCss/variables";

export const Anchor = styled.a`
  font-size: ${fontSize.small};
  letter-spacing: ${spacing.wide};
  color: ${props => props.color};
  text-transform: ${props => (props.transform ? "uppercase" : "none")};
`;
export const Copyright = styled(Anchor)`
  font-weight: ${weight.light};
  font-size: ${fontSize.xsmall};
  padding-bottom: 5em;
`;

export const Logo = styled.img`
  padding-top: 4em;
  width: 5.4em;
`;
export const Icon = styled.img`
  width: 1.4em;
  height: 1.4em;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const LinksContainer = styled(Wrapper)`
  width: 20em;
  border-bottom: 0.25em dashed ${color.primary};
  padding-bottom: 0.5em;
  @media (max-width: 767px) {
    flex-direction: column;
    width: 10em;
  }
`;
export const SocialWrapper = styled(Wrapper)`
  width: 6.5em;
  align-items: center;
`;

export const LinkItem = styled.span`
  width: 10em;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 767px) {
    padding-top: 0.5em;
    padding-bottom: 0.4em;
  }
`;

export const Divider = styled.span`
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  width: 1em;
  background-color: ${color.primary};
  height: 0.25em;
`;

export const Address = styled.address`
  font-size: ${fontSize.small};
  font-style: normal;
  color: ${color.white};
  letter-spacing: ${spacing.wide};
  line-height: 155%;
`;
