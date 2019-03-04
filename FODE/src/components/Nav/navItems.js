import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { LinkWrapper, LinkRotate } from './navStyles'
import styled from 'styled-components'
import { color } from '../../GlobalCss/variables'

const NavLink = styled(Link)`
  color: ${color.lightblue};
  text-transform: uppercase;
  white-space: nowrap;
`

const NavItems = () => (
  <StaticQuery
    query={graphql`
      query NavTestQuery {
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
         <LinkWrapper>
         {data.site.siteMetadata.menuLinks.map( link =>
          <LinkRotate key={link.name}>
            <NavLink to={link.link}>{link.name}</NavLink>
          </LinkRotate>
          )}
        </LinkWrapper>
    )}
  />
)

export default NavItems
