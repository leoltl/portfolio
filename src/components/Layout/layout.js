import React from 'react';

import Header from '../Header/header'; 

import './layout.scss';

const Layout = (props) => {
  return (
    <>
    <Header />
    <main>{props.children}</main>
    </>
  )
}

export default Layout;