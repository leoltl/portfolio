import React from 'react';

import './hero.scss';

const Hero = (props) => {
  return (
    <section className="hero">
      <div className="hero__text-content">
        <div className="hero__greeting">
          <h3>Hello,</h3>
          <h1>I am Leo Lee.</h1>
          <h3>Full Stack Web Developer</h3>
        </div>
        <div className="hero__tagline">
          <p>I'm a software developer based in Toronto, ON passionate about building applications that provide great user experience.</p>
        </div>
      </div>
      <div className="hero__down-arrow"></div>
    </section>
  )
}

export default Hero;