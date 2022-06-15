import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GetCategoryList } from '../../GraphQL/Queries';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    const promises = GetCategoryList();
    promises.then((result) => {
      this.setState({ categories: result });
    });
  }

  render() {
    return (
      <header>
        <div className="navigation">
          {!!this.state.categories.length &&
            this.state.categories.map((name) => (
              <NavLink to={`category/${name}`} key={name}>{`${name}`}</NavLink>
            ))}
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
