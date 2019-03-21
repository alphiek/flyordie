import React, { Component } from "react";
import {
  Cart,
  Items,
  SnipcartContainer,
  HeaderWrapper,
  BurgerMenu,
  CartWrapper,
  TopLine,
  MidLine,
  BottomLine
} from "./headerStyles";
import cart from "../../images/cartnew.svg";
import Nav from "../Nav/Nav";
import LogIn from "./LogIn";
import { StaticQuery, graphql } from "gatsby";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      links: []
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden(event) {
    event.preventDefault()
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  componentDidMount() {
    let items = this.props.links

    items.forEach(item => {
      this.setState(previous => ({
        links: [...previous.links, item]
      }))
    })
  }

  render() {
    return (
      <React.Fragment>
        <HeaderWrapper>
          {!this.state.isHidden && <Nav navToggle={this.toggleHidden} links={this.state.links}/>}
          <BurgerMenu onClick={this.toggleHidden}>
            <TopLine />
            <MidLine />
            <BottomLine />
          </BurgerMenu>
          <SnipcartContainer>
            <LogIn />
            <CartWrapper>
              <a href="www.#.com" className="snipcart-checkout">
                <Cart src={cart} alt="Checkout Icon" />
              </a>
              <div className="snipcart-summary">
                <Items className="snipcart-total-items" />
              </div>
            </CartWrapper>
          </SnipcartContainer>
        </HeaderWrapper>
      </React.Fragment>
    );
  }
}

export default () => (
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
    render={data => <Header links={data.site.siteMetadata.menuLinks}/>}
  />
);
