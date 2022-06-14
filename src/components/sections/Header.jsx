import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GetCategoryList from '../../GraphQL/Queries';

class Header extends Component {
  render() {
    return (
      <header>
        <GetCategoryList />
        <Link to="/delivery">Delivery</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </header>
    );
  }
}

export default Header;
