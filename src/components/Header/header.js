import React from 'react';
import logo from '../../images/Logo.png';

import scrollTo from 'gatsby-plugin-smoothscroll';

import './header.scss';

const Header = (props) => {
  return (
    <header>
      <div className="header__container">
        <a href="/"><img src={logo} alt='logo'/></a>
        <nav>
          <li onClick={() => scrollTo('#about')}><small>01.</small>About</li>
          <li onClick={() => scrollTo('#projects')}><small>02.</small>Projects</li>
          <li onClick={() => scrollTo('#connect')}><small>03.</small>Connect</li>
        </nav>
      </div>
    </header> 
  )
}



export default Header;