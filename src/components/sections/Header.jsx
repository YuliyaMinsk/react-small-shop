import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import GetCategoryList from '../../graphql/CategoryQuery';
import GetCurrencyList from '../../graphql/CurrencyQuery';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], currencies: [] };
  }

  componentDidMount() {
    let promises = GetCategoryList();
    promises.then((result) => {
      this.setState({ categories: result });
    });

    promises = GetCurrencyList();
    promises.then((result) => {
      this.setState({ currencies: result });
    });
  }

  render() {
    return (
      <header>
        <div className="navigation">
          {this.state.categories.map((name) => (
            <NavLink to={name === 'all' ? `/` : `category/${name}`} key={name}>{`${name}`}</NavLink>
          ))}
        </div>
        <div>
          <Link className="logo" to="/"></Link>
        </div>
        <div className="order">
          <span className="currency">
            <ul>
              {this.state.currencies.map(({ label, symbol }) => (
                <li key={label}>
                  <NavLink to={`${label}`} key={label}>{`${symbol} ${label}`}</NavLink>
                </li>
              ))}
            </ul>
          </span>
          <Link className="cart" to="/cart"></Link>
        </div>
      </header>
    );
  }
}

export default Header;
