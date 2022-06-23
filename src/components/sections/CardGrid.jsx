import React, { Component } from 'react';

import Card from './Card';
import GetProductList from '../../GraphQL/ProductQuery';

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { productsAll: [] };
    this.state = { productsFiltered: [] };
  }

  componentDidMount() {
    let promises = GetProductList();
    promises.then((result) => {
      let resultFiltered = result.filter((product) => product.category === this.props.category);
      resultFiltered = result.filter((product) => product.name.startsWith('Air'));
      this.setState({ productsAll: result });
      this.setState({ productsFiltered: this.props.category === 'all' ? result : resultFiltered });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      const resultFiltered = this.state.productsAll.filter(
        (product) => product.category === this.props.category
      );
      this.setState({
        productsFiltered: this.props.category === 'all' ? this.state.productsAll : resultFiltered,
      });
    }
  }

  render() {
    return (
      <div className="card-grid">
        {this.state.productsFiltered.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    );
  }
}

export default CardGrid;
