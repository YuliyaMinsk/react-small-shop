import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import GetProduct from '../../graphql/ProductQuery';
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
    this.state = { product: null, received: true };
  }

  componentDidMount() {
    const productID = getProductID();
    let promises = GetProduct(productID);

    promises.then((result) => {
      if (!result) {
        this.setState({ received: false });
      } else {
        this.setState({ received: true });
        this.setState({ product: result });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.received ? (
          this.state.product !== null && (
            <div>
              <GalleryProduct gallery={this.state.product.gallery} />
              <InfoProduct info={this.state.product} />
            </div>
          )
        ) : (
          <div>
            <Navigate to="/" />
          </div>
        )}
      </div>
    );
  }
}

export default Product;
