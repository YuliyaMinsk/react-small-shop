import React, { Component } from 'react';

function updateAttribute(attribute) {
  return attribute.toLowerCase().split(' ').join('-');
}

class InfoProduct extends Component {
  render() {
    // console.log('Product info: ', this.props.info);
    return (
      <div className="product-info">
        <h1 className="product-brand">{this.props.info.brand}</h1>
        <h2 className="product-title">{this.props.info.name}</h2>
        {this.props.info.attributes.map(({ name, type, items }) => (
          <div className={`product-attributes product-${updateAttribute(name)}`}>
            <p className="product-subtitle">{name}:</p>
            <div>
              {items.map(({ displayValue, value }) => (
                <span className={`product-attribute ${type}`} value={value}>
                  <input
                    type="radio"
                    name={`attribute-${updateAttribute(name)}`}
                    id={updateAttribute(name.concat(' ', value))}
                    value={value}
                  />
                  <label
                    for={updateAttribute(name.concat(' ', value))}
                    style={{ backgroundColor: value }}
                  >
                    <span class={updateAttribute(name.concat(' ', value))}>{displayValue}</span>
                  </label>
                </span>
              ))}
            </div>
          </div>
        ))}
        <div>
          <button className="button button-colored button-big product-button">Add to cart</button>
        </div>
        <div
          className="product-description"
          dangerouslySetInnerHTML={{ __html: this.props.info.description.replaceAll('h1>', 'h3>') }}
        />
      </div>
    );
  }
}

export default InfoProduct;
