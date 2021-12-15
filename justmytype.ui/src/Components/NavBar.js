import React from 'react';
import propTypes from 'prop-types';
import {
  Navbar, Nav, NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import AuthBtn from './AuthBtn';
import { signInUser, signOutUser } from '../data/auth';

const linkStyle = {
  margin: "1rem",
  display: "block",
  textDecoration: "none",
  color: "white"
};

const NavBar = ({ user }) => {
  const authenticated = () => (
    <>
        <NavItem className="mx-3">
          <Link style={linkStyle} to='/myfonts'>My Fonts</Link>
        </NavItem>
    </>
  );

  return (
    <div>
     <Navbar id="uglyNav" light  >
          <Nav pills navbar className="d-flex flex-row">
          <NavItem className="mx-3">
            <Link style={linkStyle} to="/">Home</Link>
          </NavItem>
          <NavItem className="mx-3">
            {user
            ? authenticated()
            : null
            }
          </NavItem>
          <NavItem className="mx-3">
          <AuthBtn id="authBtn" onClick={user ? signOutUser : signInUser} buttonText={user ? "Sign Out." : "Sign In."}/>
          </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: propTypes.any
};

export default NavBar;
