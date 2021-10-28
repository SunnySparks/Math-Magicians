import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <nav className="navBar navbar-expand-lg p-4">
      <div className="container-fluid">
        <ul className="row">
          <div className="col-md-7 float-left">
            <li>
              <h1>
                Math Magicians
              </h1>
            </li>
          </div>
          <div className="float-right row col-md-5">
            {links.map((link) => (
              <li className="col link-top" key={link.id}>
                <h4 className="nav-link">
                  <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
                </h4>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
