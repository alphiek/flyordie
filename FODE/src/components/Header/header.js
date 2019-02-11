import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { HeaderWrapper, BurgerMenu, Line, CartWrapper } from './headerStyles'

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
     <HeaderWrapper>
       <BurgerMenu>
         <Line />
         <Line />
         <Line />
       </BurgerMenu>
       <CartWrapper>
            <a href="#" className="snipcart-checkout"></a>
            <a href="#" alt="Link for checkout"></a>
       </CartWrapper>
       <div>
       <a href="#" className="snipcart-edit-profile">Create an Account</a>
       <a href="#" className="">Log-in</a>
       </div>
    </HeaderWrapper>
   )}
  />
)

export default Header
