import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
     <header>
       <div
        style={{
          margin: `0 auto`,
          height: `2em`,
          padding: `0`,
          position: `absolute`,
          top: `0`,
         }}>
          <h1 style={{ margin: 0 }}>
            <Link to="/" style={{
              color: `white`,
              textDecoration: `none`,
              }}>
             {data.site.siteMetadata.title}
            </Link>
          </h1>
        </div>
     </header>
   )}
  />
)

export default Header
