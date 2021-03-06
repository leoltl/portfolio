import React, { useCallback } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import './about.scss';

const About = (props) => {
  const handleGA = useCallback(e => {
    trackCustomEvent({
      category: "Resume Click",
      action: "Click",
    })
  }, [])

  return (
    <section className="about" id="about">
      <h3><small>01.</small> About Me</h3>
      <div className="about__content">
        <article className="about__summary">
          I am an ecommerce business professional turned Full Stack Web Developer with knowledge in 
          digital experience best practices. Passionate and curious about all things digital. 
          Eager to combine my user experience obsession and technical know-hows, to translate 
          business requirements and user stories into performant, well-tested product that 
          delights users.
        </article>
        <article className="about__technology">
          <div className="about__technology-header">Technologies that I am familiar with:</div>
          <div className="about__technology-grid">
            <div className="about__technology-grid-item">JavaScript (ES6+)</div>
            <div className="about__technology-grid-item">Semantic HTML &amp; CSS</div>
            <div className="about__technology-grid-item">React</div>
            <div className="about__technology-grid-item">Sass</div>
            <div className="about__technology-grid-item">Node.js</div>
            <div className="about__technology-grid-item">Express</div>
            <div className="about__technology-grid-item">PostgreSQL</div>
            <div className="about__technology-grid-item">Mocha &amp; Chai</div>
            <div className="about__technology-grid-item">Git</div>
          </div>
        </article>
      </div>
      <a className="about__button" href="https://www.dropbox.com/s/dixfhk87mhydum8/Leo_LEE_Resume.pdf" target="__blank"><button className="button" onClick={handleGA} >My résumé</button></a>
    </section>
  )
}

export default About;