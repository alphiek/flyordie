import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Nav from "../Nav/Nav";
import SnipcartCheckout from './SnipcartCheckout'
import Burger from './Burger'
import LogIn from "./LogIn";
import styled from 'styled-components'


const HeaderWrapper = styled.header`
  width: 100%;
  margin: 0;
  top: 0;
  left: 0;
  position: absolute;
  padding: 0;
  z-index: 666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  @media (min-width: 768px) and (max-width: 1024px) {
   padding-top: 0.5em;
  }
`;


const SnipcartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 7.5em;
  margin-right: 0.5em;
`;


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      links: [],
      renderLogin: true,
      renderDesktopNav: true,
    };

    this.toggleHidden = this.toggleHidden.bind(this);
    this.updatePredicate = this.updatePredicate.bind(this)
  }

  toggleHidden(event) {
    event.preventDefault()
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  componentDidMount() {
    let items = this.props.links

    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate)

    items.forEach(item => {
      this.setState(previous => ({
        links: [...previous.links, item]
      }))
    })
  }

  componentWillUnmount() {
     window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
     this.setState({
       renderLogin: window.innerHeight > 593 && window.innerWidth > 1230,
       renderDesktopNav: window.innerWidth > 1279
     });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderWrapper>
          {
            !this.state.isHidden &&
            <Nav
              navToggle={this.toggleHidden}
              links={this.state.links}
              showDesktop={this.state.renderDesktopNav}
            />
          }
          {
            this.state.isHidden ?
            <Burger
                onClick={this.toggleHidden}
              />
              :
              null
           }
            <SnipcartContainer>
              {
                this.state.renderLogin ?
                  <LogIn /> : null
              }
              <SnipcartCheckout />
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
