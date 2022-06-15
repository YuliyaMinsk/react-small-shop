import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import GetCategoryList from '../../GraphQL/Queries';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="navigation">
          <GetCategoryList />
          <NavLink to="/delivery">Delivery</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="logo">
          <Link className="logo-image" to="/"></Link>
        </div>
        <div className="order">
          <Link className="currency-image" to="/"></Link>
          <Link className="cart-image" to="/cart"></Link>
        </div>
      </header>
    );
  }
}

export default Header;
