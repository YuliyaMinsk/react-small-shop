import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <span className="card-image-container">
          <img
            className="card-image"
            src={this.props.product.gallery[0]}
            alt={this.props.product.name}
          ></img>
        </span>
        <p className="card-title">{this.props.product.name}</p>
        <p className="card-price">{this.props.product.prices[0].amount}</p>
      </div>
    );
  }
}

export default Card;
