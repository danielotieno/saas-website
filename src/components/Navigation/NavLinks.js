import { Link } from 'gatsby';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector('.dropdown-list').classList.toggle('show');
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about-us'>About Us</Link>
      </li>
      <li className='dropdown'>
        <Link to='/current-students'>Students</Link>
        <button aria-label='dropdown toggler' onClick={handleDropdownStatus}>
          <i className='fa fa-angle-down'></i>
        </button>
        <ul className='dropdown-list'>
          <li>
            <Link to='/students/need-sponsorship'>
              Need Sponsorship
            </Link>
          </li>
          <li>
            <Link to='/students/current'>Current Students</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to='/news'>News</Link>
      </li>
      <li>
        <Link to='/events'>Events</Link>
      </li>
      <li>
        <Link to='/contact-us'>Contact Us</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
