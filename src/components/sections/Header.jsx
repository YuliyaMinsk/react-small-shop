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
          {this.state.categories.map((name) => (
            <NavLink to={`category/${name}`} key={name}>{`${name}`}</NavLink>
          ))}
        </div>
        <div>
          <Link className="logo" to="/">
            <span class="logo-image"></span>
          </Link>
        </div>
        <div className="order">
          <Link className="currency" to="/">
            <span class="currency-image"></span>
          </Link>
          <Link className="cart" to="/cart">
            <span class="cart-image"></span>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
