import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import GetProduct from '../../GraphQL/ProductQuery';
import GalleryProduct from '../sections/GalleryProduct';
import InfoProduct from '../sections/InfoProduct';

function getProductID() {
  const locationArray = window.location.pathname.split('/');
  const productID = locationArray[locationArray.length - 1];
  return productID;
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [], received: false };
  }

  componentDidMount() {
    const productID = getProductID();
    let promises = GetProduct(productID);

    promises.then((result) => {
      this.setState({ product: result });
      this.setState({ received: true });
    });
  }

  render() {
    return (
      <div>
        {this.state.received && !this.state.product.hasOwnProperty('id') ? (
          <div>
            <Navigate to="/" />
          </div>
        ) : (
          ''
        )}
        <div>
          <GalleryProduct gallery={this.state.product.gallery} />
          <InfoProduct info={this.state.product} />
        </div>
      </div>
    );
  }
}

export default Product;
