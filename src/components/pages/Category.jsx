import React, { Component, Fragment } from 'react';
import { useParams } from 'react-router-dom';

const pagelocation = '';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Category extends Component {
  componentDidMount() {
    const { category } = this.props.params;
    console.log(category);
  }

  render() {
    return (
      <>
        <p>Heya!! How are you?</p>
      </>
    );
  }
}

export default withParams(Category);
