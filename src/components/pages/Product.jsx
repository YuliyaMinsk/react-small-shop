import React, { Component } from 'react';

import GetProduct from '../../GraphQL/ProductQuery';
import GalleryProduct from '../sections/GalleryProduct';
import InfoProduct from '../sections/InfoProduct';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }

  componentDidMount() {
    const locationArray = window.location.pathname.split('/');
    const productID = locationArray[locationArray.length - 1];

    let promises = GetProduct(productID);
    promises.then((result) => {
      this.setState({ product: result });
    });
  }

  render() {
    return (
      <div>
        <GalleryProduct gallery={this.state.product.gallery} />
        <InfoProduct info={this.state.product} />
      </div>
    );
  }
}

export default Product;
