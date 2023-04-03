import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row p-6 m-6">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row  is-flex-direction-row-reverse pl-6 ml-6 mb-2">
          <li className="mx-1 pt-5">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1 pt-5">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span className="pl-6" role="img" aria-label="plant"></span> The Plant
          Store
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
