import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link to={`/product/${this.props.product.id}`}>
          <span className="card-image-container">
            <img
              className="card-image"
              src={this.props.product.gallery[0]}
              alt={`${this.props.product.brand} ${this.props.product.name}`}
            ></img>
          </span>
          <p className="card-title">{`${this.props.product.brand} ${this.props.product.name}`}</p>
          <p className="card-price">{this.props.product.prices[0].amount}</p>
        </Link>
      </div>
    );
  }
}

export default Card;
