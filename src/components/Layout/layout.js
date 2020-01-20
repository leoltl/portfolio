import React from 'react';
import { Helmet } from "react-helmet";

import Header from '../Header/header'; 

import './layout.scss';

const Layout = (props) => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Leo Lee | Full Stack Web Developer</title>
      </Helmet>
    <Header />
    <main>{props.children}</main>
    </>
  )
}

export default Layout;