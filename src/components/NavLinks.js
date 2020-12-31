import React from 'react';
import { Link } from 'gatsby';

const NavLinks = ({ extraClassName }) => {
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/contact'>About</Link>
      </li>
      <li>
        <Link to='/contact'>News & Events</Link>
      </li>
      <li>
        <Link to='/contact'>Biographies</Link>
      </li>
      <li>
        <Link to='/contact'>Gallery</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
