import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../sections/Header';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default Layout;
