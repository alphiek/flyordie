import React from 'react'
import { Pattern } from "../../GlobalCss/containers";
import patternLight from "../../images/repeating-pattern.svg";
import { color } from "../../GlobalCss/variables";
import { Link } from 'gatsby'
import logoholding from "../../images/logoholding.svg";

const Error = () => (
  <Pattern
    column
    bgColor={color.secondary}
    background={patternLight}
    padding
    style={{height: '100vh'}}>
    <img style={{width: '10em', paddingBottom: '1em'}} src={logoholding} alt='Fode Logo' />
    <h1 style={{color: color.primary, paddingBottom: '0.5em'}}>NOT FOUND</h1>
    <p style={{ paddingBottom: '1em' }}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <div style={{ backgroundColor: color.primary, width: '15em', padding: '1em', borderRadius: '0.2em'}}>
    <Link to='/' style={{ color: color.white }}>Return to the Home Page</Link>
    </div>
  </Pattern>
);

export default Error
