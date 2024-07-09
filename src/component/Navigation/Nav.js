import React from 'react';
import links from  '../Dashboard/List'
import { Link } from 'react-router-dom';
import Header from './Header';

const Nav = ({userRole = 'Doctor'}) => {
  return (
    <><Header /><div className='nav'>
          <ul>
              {links[userRole].map((link, index) => (
                  <li key={index}>
                      <Link to={link.path}>
                          {link.label}
                      </Link>
                  </li>
              ))}
          </ul>


      </div></>
  );
}

export default Nav;
