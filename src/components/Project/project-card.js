import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({expandable, project, reverse}) => {
  return (
    <article className={`projects__card${expandable ? " expandable" : ''}${reverse ? " reverse" : ""}`}>
      <img src={project.imageUrl} alt="project" />
      <div className="projects__card-content">
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        <div className="projects__card-icons">
          <a href={project.demoUrl}><span><FontAwesomeIcon icon={faArrowAltCircleRight} size="5px"/> Live Demo</span></a>
          <a href={project.srcUrl}><span><FontAwesomeIcon icon={faArrowAltCircleRight} size="5px"/> Source Code</span></a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard;