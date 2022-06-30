import React, { Component } from 'react';

class InfoProduct extends Component {
  render() {
    // console.log('Product info: ', this.props.info);
    return (
      <div className="product-gallery">
        <div className="product-brand">
          <h1>{this.props.info.brand}</h1>
        </div>
        <div className="product-title">
          <h2>{this.props.info.name}</h2>
        </div>
        <div className="product-size">{this.props.info.brand}</div>
        <div className="product-color">{this.props.info.brand}</div>
        <div className="product-price">{this.props.info.brand}</div>
        <div>
          <button className="button button-colored button-big product-button">Add to cart</button>
        </div>
        <div
          className="product-description"
          dangerouslySetInnerHTML={{ __html: this.props.info.description }}
        />
      </div>
    );
  }
}

export default InfoProduct;
