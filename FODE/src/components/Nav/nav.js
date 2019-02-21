import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { NavContainer } from './navStyles'

const Nav = () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <NavContainer>
       <div>
      {data.site.siteMetadata.menuLinks.map( link =>
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
        )}
        <a href="#" class="snipcart-checkout">Click here to checkout</a>
        <div> X </div>
        </div>
      </NavContainer>
    )}
  />
)

export default Nav
