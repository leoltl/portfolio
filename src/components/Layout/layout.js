import React from 'react';

import './layout.scss';

const Layout = (props) => {
  return (
    <main>{props.children}</main>
  )
}

export default Layout;