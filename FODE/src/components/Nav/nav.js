import React from "react";
import SideNav from './SideNav'
import MobileNav from './MobileNav'


const Nav = (props) => {
    return (
      <div>
      {props.showDesktop ?
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
      </div>
    )
  }

export default Nav
