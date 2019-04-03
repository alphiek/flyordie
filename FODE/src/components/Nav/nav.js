import React from "react";
import SideNav from './SideNav'
import MobileNav from './MobileNav'

const Nav = (props) =>
    return (
      { props.show ?
        <SideNav
          navToggle={props.navToggle}
          links={props.links}
          />
        :
        <MobileNav
          navToggle={props.navToggle}
          links={props.links}
          />
      }
    )
  }

export default Nav
