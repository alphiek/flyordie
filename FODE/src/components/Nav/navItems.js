import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { LinkWrapper, LinkRotate } from "./navStyles";
import styled from "styled-components";
import { color, fontSize } from "../../GlobalCss/variables";

const NavLink = styled(Link)`
  color: ${color.lightblue};
  text-transform: uppercase;
  white-space: nowrap;
  @media (max-width: 991px) {
    font-size: ${fontSize.largeLink};
  }
`;

const activeStyle = {
  color: "white"
};

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
        {data.site.siteMetadata.menuLinks.map(link => (
          <LinkRotate key={link.name}>
            <NavLink to={link.link} activeStyle={activeStyle}>
              {link.name}
            </NavLink>
          </LinkRotate>
        ))}
      </LinkWrapper>
    )}
  />
);

export default NavItems;
