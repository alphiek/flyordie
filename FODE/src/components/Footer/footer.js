import React from "react";
import { Pattern } from "../../GlobalCss/containers";
import { color } from "../../GlobalCss/variables";
import logoWhite from "../../images/logo-white.svg";
import patternDark from "../../images/repeating-white.svg";
import AddressWrapper from "./addressWrapper";
import LinkWrapper from "./linkWrapper";
import { Logo } from "./footerStyles";
import styled from "styled-components";

const ClipPattern = styled(Pattern)`
  -webkit-clip-path: polygon(0 6%, 100% 13%, 100% 100%, 0% 100%);
  clip-path: polygon(0 6%, 100% 13%, 100% 100%, 0% 100%);
  margin-top: -5em;
  padding-top: 3em;
  @media (max-width: 479px) {
    margin-top: -8em;
`;

const Footer = () => (
  <ClipPattern column bgColor={color.dullgreen} background={patternDark}>
    <Logo src={logoWhite} alt="House of Fode Logo" />
    <LinkWrapper />
    <AddressWrapper />
  </ClipPattern>
);

export default Footer;
