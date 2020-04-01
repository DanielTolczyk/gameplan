import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = () => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">GamePlan</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/library">Library</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/planner">Planner</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar;