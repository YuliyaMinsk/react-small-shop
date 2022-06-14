import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

const withLocation = (Component) => (props) => {
  const location = useLocation();
  return <Component {...props} location={location} />;
};

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withLocation(ScrollToTop);
