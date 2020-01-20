import React, { useState } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import Project from './project'
import ProjectCard from './project-card';

import './projects.scss';


const handleGA = ()=> {
  trackCustomEvent({
    category: "Show More Click",
    action: "Click",
  })
}

const Projects = ({ projects }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="projects" id="projects">
      <h3><small>02.</small> Projects</h3>

      <div className="projects__feature-project">
       {projects.map((p, i) => p.featured ? <Project key={i} project={p} idx={i}/> : null)}
      </div>

      { showMore && 
        (<div className="projects__project-group">
        {projects.map((p, i) => !p.featured ? <ProjectCard key={i} project={p} /> : null)}
        </div>) }
      
      <button className="button projects__button" 
          onClick={() => {
            setShowMore(prev => !prev);
            handleGA();
          }}>
        {showMore ? "Hide ":"Show More"}
      </button>      
    </section>
  )
}

export default Projects;