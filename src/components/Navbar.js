import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const HomeNavbar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id='Nav-container'>
      <Navbar color="dark" light expand="md" fixed='top'>
        <NavbarToggler id='toggleButton' onClick={toggle}/>

          <div id='NavContainer'>
            <Collapse isOpen={isOpen} navbar >
              <Nav className="mr-auto" navbar>
                  <NavItem>
                    <div id='NavLinks-container'>
                      <Link id='NavLinks' to='/palmas'>Home</Link>
                    </div>
                  </NavItem>
                
                  <NavItem>
                    <div id='NavLinks-container'>
                      <Link id='NavLinks' to='/palmas/tramites'>Tramites</Link>
                    </div>
                  </NavItem>
                
                  <NavItem>
                    <div id='NavLinks-container'>
                      <Link id='NavLinks' to='/palmas/contacto'>Contacto</Link>
                    </div>
                  </NavItem>

              </Nav>
            </Collapse>
          </div>

      </Navbar>
      {children}
    </div>
  );
}

export default HomeNavbar;