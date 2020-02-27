import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./hero.scss"

const Hero = props => {
  return (
    <section className="hero">
      <div className="hero__text-content">
        <div className="hero__greeting">
          <h2>Hello,</h2>
          <h1>I am Leo Lee.</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <div className="hero__tagline">
          <p>
            I'm a software developer based in Canada. Passionate about building
            web applications that marries good user experience design.
          </p>
        </div>
      </div>
      <div
        className="hero__down-arrow-wrapper"
        onClick={() => scrollTo("#about")}
      >
        <div className="hero__down-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
