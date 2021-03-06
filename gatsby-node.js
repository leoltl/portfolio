/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const projects = [
  { title: 'hashGram',
    description: 'hashGram is a full stack Instagram clone. The goal was to build a functional clone of some Internet-based photo-sharing application.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/hashGram/master/public/screenshot-1.png',
    demoUrl: 'https://leoltl-hashgram.herokuapp.com/',
    srcUrl: 'https://github.com/leoltl/hashGram',
    techStack: 'Node.js, Express, AWS S3, Knex, Postgres, jest, TDD',
    team: false,
    featured: true,
  },
  { title: 'Spotify Music Profile',
    description: 'View your favourite songs and artists based on Spotify listening history. Discover song audio feature and recommendations. Inspired by an open-source application.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/spotify-profile/master/Screenshot_2020-01-18%20Spotify%20Profile%20See%20your%20spotify%20activties.png',
    demoUrl: 'https://leoltl-spotify-profile.herokuapp.com/',
    srcUrl: 'https://github.com/leoltl/spotify-profile',
    techStack: 'React, CSS in JS',
    team: false,
    featured: true,
  },
  { title: 'Headless Blog CMS',
    description: 'CMS system has an express app that serves content via a REST API. A Vue client app is created for rendering posts and a React admin app is created for managing posts and user comments from the backend api',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/blogcms-admin/master/public/screenshot-2.png',
    demoUrl: 'https://leoltl-blogcms-admin.herokuapp.com/',
    srcUrl: 'https://github.com/leoltl/blogcms-admin',
    techStack: 'Express, Mongoose, Mongo, passport-jwt, React, Materiaul UI, Vue 3, Element UI',
    team: false,
    featured: true,
  },  
  { problemStatement: "Do you need a software development management app?",
    title: 'Issue tracker',
    description: 'Issue tracker for software team. User can add/remove member from a project, create issue/bug on the project and assign member to work on issues. ',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/issue-tracker/master/issue-tracker.png?token=AFZMXBEU6RANDZO3QIE4FIC7CSIDK',
    demoUrl: 'https://leoltl-issue-tracker.herokuapp.com/ ',
    srcUrl: 'https://github.com/leoltl/issue-tracker',
    techStack: 'Typescript, Node.js, JWT based authentication, PostgreSQL, Vue.js, Vuex',
    team: false,
    featured: true,
  },
  { problemStatement: "Have you bought an item that you only used once, and had been sitting at home since?",
    title: 'weQuest',
    description: 'A mobile app that matches users and owners of products through a reverse auction mechanism. Built for the Lighthouse Labs final project.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/weQuest/master/Screenshot%20from%202020-01-18%2022-37-44.png',
    demoUrl: 'https://wequest.xyz',
    srcUrl: 'http://github.com/leoltl/weQuest',
    techStack: 'React, Sass, TypeScript, Node.js, Express, socket.io',
    team: true,
    featured: true,
  },
  { problemStatement: "Do you want to order food from restaurants, skipping the line and pick up your food immediate as you go in?",
    title: 'Litual',
    description: 'A food ordering experience for a single restaurant. Hungry clients of this restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/Litual-LHL-midterm/master/Screenshot_2020-01-18%20Home%20Page.png',
    demoUrl: 'https://litual.herokuapp.com/',
    srcUrl: 'http://github.com/leoltl/LHL-midterm',
    techStack: 'jQuery, Sass, Node.js, Express, PostgreSQL',
    team: true,
    featured: false,
  },
  { problemStatement: "",
    title: 'scheduler',
    description: 'Interview Scheduler - an application that enable student to create, edit and delete interview appointments with real time update via web socket.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/scheduler/master/Screenshot_2020-01-18%20Interview%20Scheduler.png',
    demoUrl: 'https://scheduler-ltl.netlify.com/',
    srcUrl: 'https://github.com/leoltl/scheduler',
    techStack: 'React, WebSocket, Storybook, Cypress, Mocha, Chai',
    team: false,
    featured: false,
  },
  { problemStatement: "",
    title: 'tinyApp',
    description: 'A full stack web app built with Node and Express that allows users to shorten long URLs (à la bit.ly).',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/tinyApp/master/docs/details-page.png',
    demoUrl: 'https://tinyapp-leolee.herokuapp.com/login',
    srcUrl: 'https://github.com/leoltl/tinyApp',
    techStack: 'EJS template engine, Node.js, Express',
    team: false,
    featured: false,
  },
  { problemStatement: "",
    title: 'React kanban board',
    description: 'Simple trello board clone. Supports drag and drop of tasks to different swimlanes. Data are persist to local storage.',
    imageUrl: 'https://raw.githubusercontent.com/leoltl/kanban-board/master/Screenshot_2020-01-18%20Trello%20Clone.png',
    demoUrl: 'https://react-kanban-board-leoltl.herokuapp.com',
    srcUrl: 'https://github.com/leoltl/kanban-board',
    techStack: 'React',
    team: false,
    featured: false,
  },
]

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  projects.forEach(project => {
    const node = {
      problemStatement: project.problemStatement,
      title: project.title,
      id: createNodeId(`Project-${project.title}`),
      description: project.description,
      imageUrl: project.imageUrl,
      demoUrl: project.demoUrl,
      srcUrl: project.srcUrl,
      techStack: project.techStack,
      team: project.team,
      featured: project.featured,
      internal: {
        type: "Project",
        contentDigest: createContentDigest(project),
      },
    }
    actions.createNode(node)
  })
}
