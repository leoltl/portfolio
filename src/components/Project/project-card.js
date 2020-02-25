import React, { useCallback } from "react"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowAltCircleRight,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"

const ProjectCard = ({ expandable, project, reverse, shifted }) => {
  const handleGA = useCallback(
    type => {
      trackCustomEvent({
        category: "Project Click",
        action: "Click",
        label: `${project.title}, ${type}`,
      })
    },
    [project.title]
  )

  return (
    <article
      className={`projects__card${expandable ? " expandable" : ""}${
        reverse ? " reverse" : ""
      }${shifted ? " shifted" : ""}`}
    >
      <img src={project.imageUrl} alt="project" />
      <div className="projects__card-content">
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        <p className="projects__card-techStack">{project.techStack}</p>
        <div className="projects__card-badge">
          {project.team ? (
            <>
              <FontAwesomeIcon icon={faUsers} /> Team
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faUser} /> Solo
            </>
          )}
        </div>
        <div className="projects__card-icons">
          <a
            href={project.demoUrl}
            onClick={() => handleGA("Live")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} /> Live Demo
            </span>
          </a>
          <a
            href={project.srcUrl}
            onClick={() => handleGA("Code")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} /> Source Code
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
