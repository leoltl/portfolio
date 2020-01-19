import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './connect.scss';

const Connect = (props) => {

  const [formField, setFormField] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleForm = (e) => {
    setFormField(prev => (
     {...prev, [e.target.name]: e.target.value}
    )) 
  };

  return (
    <section className='connect'>
      <h3><small>03.</small> Connect with me</h3>
      <div className="connect__content">
        <div className="connect__form">
          <h4 className="connect__subtitle">Leave me a message:</h4>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <div className="connect__form-group">
              <label htmlFor="name">Your name:</label><br />
              <input name="name" id="name" value={formField.name} onChange={handleForm}/><br />
              <label htmlFor="email">Email:</label><br />
              <input name="email" id="email"value={formField.email} onChange={handleForm}/>
            </div>
            <label htmlFor="message">Message:</label><br />
            <textarea name="message" id="message" rows="3" value={formField.email} onChange={handleForm}/>
            <button className="button" type="submit">Submit</button>
          </form>
        </div>
        <div className="connect__online">
          <h4 className="connect__subtitle">Find me online:</h4>
          <div className="connect__icons">
            <a href="https://github.com/leoltl" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></a>
            <a href="https://linkedin.com/in/tl-leolee" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <a href="mailto:tl.leolee@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Connect;