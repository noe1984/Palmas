import React, { useState } from 'react'
import { Collapse, Navbar as ReactstrapNavbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
 
import { ScrollspyNavLink } from 'reactstrap-scrollspy'
 
function Navbar() {
  return (
    <ReactstrapNavbar expand="md" fixed="top" className="navContainer">
      <h1>Internet Las Palmas</h1>
        <Nav navbar className="navbar">

          <NavItem>
            <ScrollspyNavLink name="tramites">
              <NavLink href="tramites">Trámites</NavLink>
            </ScrollspyNavLink>
          </NavItem>

          <NavItem>
            <ScrollspyNavLink name="servicios">
              <NavLink href="section">Servicio técnico</NavLink>
            </ScrollspyNavLink>
          </NavItem>

          <NavItem>
            <ScrollspyNavLink name="footer">
              <NavLink href="footer">Contáctanos</NavLink>
            </ScrollspyNavLink>
          </NavItem>

        </Nav>
    </ReactstrapNavbar>
  )
}
 
export default Navbar