import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import AuthBtn from './AuthBtn';
import { signInUser, signOutUser } from '../data/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
        <NavItem>
          <Link to='/myfonts'>My Fonts</Link>
        </NavItem>
    </>
  );

  return (
    <div>
     {user && <Navbar light expand='md' >

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto">
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            {authenticated()}
          </NavItem>
          <NavItem>
          <AuthBtn onClick={user ? signOutUser : signInUser} buttonText={user ? "Sign Out." : "Sign In."}/>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      }
    </div>
  );
};

NavBar.propTypes = {
  user: propTypes.any
};

export default NavBar;
