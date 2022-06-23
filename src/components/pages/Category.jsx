import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import CardGrid from '../sections/CardGrid';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { category: this.props.params.category ? this.props.params.category : 'all' };
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.category !== prevProps.params.category) {
      this.setState({ category: this.props.params.category ? this.props.params.category : 'all' });
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.category}</h1>
        <p>Heya!! How are you? Category</p>
        <CardGrid category={this.state.category} />
      </>
    );
  }
}

export default withParams(Category);
