import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({expandable, project, reverse}) => {
  return (
    <article className={`projects__card${expandable ? " expandable" : ''}${reverse ? " reverse" : ""}`}>
      <img src={project.imageUrl} alt="project" />
      <div className="projects__card-content">
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        <p className="projects__card-techStack">{project.techStack}</p>
        <div className="projects__card-badge">
          { project.team ? 
            <><FontAwesomeIcon icon={faUsers} /> Team</> :
            <><FontAwesomeIcon icon={faUser} /> Solo</> }
          </div>
        <div className="projects__card-icons">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={faArrowAltCircleRight} size="5px"/> Live Demo</span></a>
          <a href={project.srcUrl} target="_blank" rel="noopener noreferrer"><span><FontAwesomeIcon icon={faArrowAltCircleRight} size="5px"/> Source Code</span></a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard;