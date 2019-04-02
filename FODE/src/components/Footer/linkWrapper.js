import React from "react";
import { Link } from "gatsby";
import { LinksContainer, LinkItem, Anchor } from "./footerStyles";
import { color, fontSize, spacing } from "../../GlobalCss/variables";
import styled from "styled-components";

const LinkUpper = styled(Link)`
  font-size: ${fontSize.small};
  letter-spacing: ${spacing.wide};
  color: ${color.white};
  @media (max-width:991px) {
    font-size: ${fontSize.body};
  }
`;

const LinkWrapper = () => (
  <LinksContainer>
    <LinkItem>
      <Anchor
        case
        color={color.white}
        href="http://localhost:8000/static/privacy-policy-51fa98b3823b6a3c01549f1a8329a7be.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy
      </Anchor>
    </LinkItem>
    <LinkItem>
      <LinkUpper to="/faqs/">FAQS</LinkUpper>
    </LinkItem>
    <LinkItem>
      <Anchor
        case
        color={color.white}
        href="http://localhost:8000/static/terms-of-use-e595ca762c750a4691c0defcc8c70389.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms of Use
      </Anchor>
    </LinkItem>
  </LinksContainer>
);

export default LinkWrapper;
