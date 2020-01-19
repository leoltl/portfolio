import React from "react";

import Hero from '../components/Hero/hero';
import About from '../components/About/about';
import Projects from '../components/Project/projects';
import Connect from '../components/Connect/connect';
import Layout from '../components/Layout/layout';

import '../components/base.scss';

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Projects />
    <Connect />
  </Layout>
)

export default IndexPage
