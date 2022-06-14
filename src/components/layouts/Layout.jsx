import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../sections/Header';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}

export default Layout;
