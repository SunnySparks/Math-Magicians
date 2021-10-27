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
    <nav className="navBar">
      <ul>
        <li>
          <h4>
            Math Magicians
          </h4>
        </li>
        {links.map((link) => (
          <li className="nav-item " key={link.id}>
            <h4 className="nav-link">
              <NavLink to={link.path} activeClassName="active-link" exact>{link.text}</NavLink>
            </h4>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
