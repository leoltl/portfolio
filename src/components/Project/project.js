import React from 'react';

import ProjectCard from './project-card';

import './projects.scss';

const Project = ({project, idx}) => {
  return (
    <>
      <div className="projects__problem-statement">
        {project.problemStatement}
      </div>
      <ProjectCard expandable={true} project={project} reverse={idx % 2 === 0}/>
    </>
  )
}

export default Project;