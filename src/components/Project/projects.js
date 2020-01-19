import React, { useState } from 'react';
import Project from './project'

import ProjectCard from './project-card';

import './projects.scss';

const featureProjects = [
  { problemStatement: "Have you wanted to order food from restaurant?",
    title: 'weQuest',
    description: 'A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project. A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project.',
    imageUrl: 'https://via.placeholder.com/720x402.png',
    demoUrl: 'https://wequest.xyz',
    srcUrl: 'http://github.com/leoltl/weQuest',
  },
  { problemStatement: "Have you wanted to order food from restaurant?",
    title: 'weQuest',
    description: 'A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project. A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project.',
    imageUrl: 'https://via.placeholder.com/720x402.png',
    demoUrl: 'https://wequest.xyz',
    srcUrl: 'http://github.com/leoltl/weQuest',
  },
  { problemStatement: "Have you wanted to order food from restaurant?",
    title: 'weQuest',
    description: 'A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project. A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project.',
    imageUrl: 'https://via.placeholder.com/720x402.png',
    demoUrl: 'https://wequest.xyz',
    srcUrl: 'http://github.com/leoltl/weQuest',
  },
];

const projects = [
  { problemStatement: "Have you wanted to order food from restaurant?",
    title: 'weQuest',
    description: 'A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project. A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project.',
    imageUrl: 'https://via.placeholder.com/720x402.png',
    demoUrl: 'https://wequest.xyz',
    srcUrl: 'http://github.com/leoltl/weQuest',
  },
  { problemStatement: "Have you wanted to order food from restaurant?",
    title: 'weQuest',
    description: 'A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project. A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project.',
    imageUrl: 'https://via.placeholder.com/720x402.png',
    demoUrl: 'https://wequest.xyz',
    srcUrl: 'http://github.com/leoltl/weQuest',
  },
  { problemStatement: "Have you wanted to order food from restaurant?",
    title: 'weQuest',
    description: 'A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project. A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project.',
    imageUrl: 'https://via.placeholder.com/720x402.png',
    demoUrl: 'https://wequest.xyz',
    srcUrl: 'http://github.com/leoltl/weQuest',
  },
];

const Projects = (props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="projects">
      <h3><small>02.</small> Projects</h3>

      <div className="projects__feature-project">
       {featureProjects.map((p, i) => <Project project={p} idx={i}/>)}
      </div>

      { showMore && 
        (<div className="projects__project-group">
        {projects.map(p => <ProjectCard project={p} />)}
        </div>) }
      
      <button className="button projects__button" onClick={() => setShowMore(prev => !prev)}>{ showMore ? "Hide ":"Show More"}</button>      
    </section>
  )
}

export default Projects;