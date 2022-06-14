import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">All</Link>
        <Link to="/clothes">Clothes</Link>
        <Link to="/tech">Tech</Link>
        <Link to="/cart">Cart</Link>
      </header>
    );
  }
}

export default Header;
