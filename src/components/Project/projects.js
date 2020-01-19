import React, { useState } from 'react';
import Project from './project'

import ProjectCard from './project-card';

import './projects.scss';

const featureProjects = [
  { problemStatement: "Have you bought an item that you only used once, and has been sitting at home since?",
    title: 'weQuest',
    description: 'A mobile app that matches user and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project. ',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/weQuest/master/Screenshot%20from%202020-01-18%2022-37-44.png',
    demoUrl: 'https://wequest.xyz',
    srcUrl: 'http://github.com/leoltl/weQuest',
    techStack: 'React, Sass, TypeScript, Node.js, Express, socket.io',
    team: true,
  },
  { problemStatement: "Do you want to order food from restaurant, skipping the line and pick up your food immediate as you go in?",
    title: 'Litual',
    description: 'A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/Litual-LHL-midterm/master/Screenshot_2020-01-18%20Home%20Page.png',
    demoUrl: 'https://litual.herokuapp.com/',
    srcUrl: 'http://github.com/leoltl/LHL-midterm',
    techStack: 'jQuery, Sass, Node.js, Express, PostgreSQL',
    team: true,
  },
  { problemStatement: "Are you curious about your music listening habit?",
    title: 'Spotify Music Profile',
    description: 'View your favourite songs and artists based on Spotify listening history. Discover song audio feature and recommendations. Inspired by an open-source application.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/spotify-profile/master/Screenshot_2020-01-18%20Spotify%20Profile%20See%20your%20spotify%20activties.png',
    demoUrl: 'https://leoltl-spotify-profile.herokuapp.com/ ',
    srcUrl: 'https://github.com/leoltl/spotify-profile',
    techStack: 'React, CSS in JS',
    team: false,
  },
];

const projects = [
  { title: 'tinyApp',
    description: 'A full stack web app built with Node and Express that allows users to shorten long URLs (à la bit.ly).',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/tinyApp/master/docs/details-page.png',
    demoUrl: 'https://tinyapp-leolee.herokuapp.com/login',
    srcUrl: 'https://github.com/leoltl/tinyApp',
    techStack: 'EJS template engine, Node.js, Express',
    team: false,
  },
  { title: 'scheduler',
    description: 'Interview Scheduler - an application that enable student to create, edit and delete interview appointments with real time update via web socket.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/scheduler/master/Screenshot_2020-01-18%20Interview%20Scheduler.png',
    demoUrl: 'https://scheduler-ltl.netlify.com/',
    srcUrl: 'https://github.com/leoltl/scheduler',
    techStack: 'React, WebSocket, Storybook, Cypress, Mocha, Chai',
    team: false,
  },
  { title: 'React kanban board',
    description: 'Simple trello board clone. Supports drag and drop of tasks to different swimlanes. Data are persist to local storage.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/kanban-board/master/Screenshot_2020-01-18%20Trello%20Clone.png',
    demoUrl: 'https://react-kanban-board-leoltl.herokuapp.com',
    srcUrl: 'https://github.com/leoltl/kanban-board',
    techStack: 'React',
    team: false,
  },
];

const Projects = (props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="projects">
      <h3><small>02.</small> Projects</h3>

      <div className="projects__feature-project">
       {featureProjects.map((p, i) => <Project key={i} project={p} idx={i}/>)}
      </div>

      { showMore && 
        (<div className="projects__project-group">
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>) }
      
      <button className="button projects__button" onClick={() => setShowMore(prev => !prev)}>{ showMore ? "Hide ":"Show More"}</button>      
    </section>
  )
}

export default Projects;