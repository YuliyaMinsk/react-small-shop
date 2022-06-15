import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import GetCategoryList from '../../GraphQL/CategoryQuery';
import GetCurrencyList from '../../GraphQL/CurrencyQuery';

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
    console.log('this.state.currencies', this.state.currencies);
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
            <ul>
              {this.state.currencies.map(({ label, symbol }) => (
                <li>
                  <NavLink to={`category/${label}`} key={label}>{`${symbol} ${label}`}</NavLink>
                </li>
              ))}
            </ul>
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
