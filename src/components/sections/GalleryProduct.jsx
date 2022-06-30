import React, { Component } from 'react';

class GalleryProduct extends Component {
  render() {
    console.log('Gallery: ', this.props.gallery);
    return (
      <div className="product-gallery">
        <div className="gallery-small-pictures"></div>
        <div className="gallery-big-picture"></div>
      </div>
    );
  }
}

export default GalleryProduct;
