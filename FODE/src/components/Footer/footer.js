import React from 'react'
import { Pattern } from '../../GlobalCss/containers'
import { color } from '../../GlobalCss/variables'
import logoWhite from "../../images/logo-white.svg"
import patternDark from '../../images/repeating-white.svg'
import AddressWrapper from './addressWrapper'
import LinkWrapper from './linkWrapper'
import { Logo } from './footerStyles'


const Footer = () => (
  <Pattern column bgColor={color.dullgreen} background={patternDark}>
    <Logo src={logoWhite} alt="House of Fode Logo"></Logo>
    <LinkWrapper />
    <AddressWrapper />
  </Pattern>
)

export default Footer
