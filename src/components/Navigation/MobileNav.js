import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import logoLight from '../../assets/images/saas.png';
import NavLinks from './NavLinks';

const MobileNav = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const mobileMenu = () => {
    let mobileNavToggler = document.querySelectorAll('.mobile-nav__toggler');
    if (mobileNavToggler) {
      mobileNavToggler.forEach((mobileNavTogglerBtn) => {
        mobileNavTogglerBtn.addEventListener('click', function (e) {
          console.log('clicked');
          document
            .querySelector('.mobile-nav__wrapper')
            .classList.toggle('expanded');
          e.preventDefault();
        });
      });
    }
    // search toggler
    let searchCloser = document.querySelectorAll('.search-toggler');
    if (searchCloser) {
      searchCloser.forEach((searchCloserBtn) => {
        searchCloserBtn.addEventListener('click', function (e) {
          document.querySelector('.search-popup').classList.toggle('active');
          e.preventDefault();
        });
      });
    }

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll('.side-menu__toggler');
    if (sideMenuCloser) {
      sideMenuCloser.forEach((sideMenuCloserBtn) => {
        sideMenuCloserBtn.addEventListener('click', function (e) {
          document
            .querySelector('.mobile-nav__wrapper')
            .classList.remove('expanded');
          e.preventDefault();
        });
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      mobileMenu();
      setHasMounted(true);
      return () => {
        mobileMenu();
      };
    }
  }, [hasMounted]);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className='mobile-nav__wrapper'>
      <div className='mobile-nav__overlay side-menu__toggler side-menu__block-overlay'></div>
      <div className='mobile-nav__content'>
        <span className='mobile-nav__close side-menu__toggler  side-menu__close-btn'>
          <i className='far fa-times'></i>
        </span>

        <div className='logo-box'>
          <Link to='/'>
            <img src={logoLight} width='101' alt='' />
          </Link>
        </div>
        <div className='mobile-nav__container'>
          <NavLinks />
        </div>

        <ul className='mobile-nav__contact list-unstyled'>
          <li>
            <i className='azino-icon-email'></i>
            <a href='mailto:info@saas.ie'>info@saas.ie</a>
          </li>
          <li>
            <i className='azino-icon-telephone'></i>
            <a href='tel:741476396'>254 (0) 41 476396</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
