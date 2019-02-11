/*import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        site {
          siteMetadata {
            menulinks {
              name:
              link:
            }
          }
        }
      }
    `}
    render={data => (
      <nav>
      {data.siteMetadata.menulinks.map(({ menulink }) => (
        <div key={menulink.name} >
          <div>
          <Link to={menulink.link}>
            {menulink.name}
          </Link>
            </div>
          </div>
        ))}
      </nav>


export default Nav*/
