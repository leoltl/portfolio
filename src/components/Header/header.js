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
          <button className="list-item" onClick={() => scrollTo('#about')}>About</button>
          <button className="list-item" onClick={() => scrollTo('#projects')}>Projects</button>
          <button className="list-item" onClick={() => scrollTo('#connect')}>Connect</button>
        </nav>
      </div>
    </header> 
  )
}



export default Header;