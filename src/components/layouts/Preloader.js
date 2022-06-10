import React, { Component } from 'react';

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  PreloaderLoad = (e) => {
    this.setState({ loading: this.state.loading });
  };
  render() {
    const preloaderload = this.state.loading ? 'd-none' : '';
    return (
      <div className={'preloader' + preloaderload}>
        <img src={process.env.PUBLIC_URL + '/assets/images/pre-loader.svg'} alt="img" />
      </div>
    );
  }
}

export default Preloader;
