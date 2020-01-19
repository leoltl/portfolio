import React from "react";
import { graphql } from 'gatsby';

import Hero from '../components/Hero/hero';
import About from '../components/About/about';
import Projects from '../components/Project/projects';
import Connect from '../components/Connect/connect';
import Layout from '../components/Layout/layout';

import '../components/base.scss';

export const query = graphql`
  query MyQuery {
    allProject {
      nodes {
        featured
        id
        title
        demoUrl
        description
        imageUrl
        problemStatement
        srcUrl
        techStack
        team
      }
    }
}
`

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <About />
    <Projects projects={data.allProject.nodes} />
    <Connect />
  </Layout>
)

export default IndexPage
