import React from 'react';
import { Query } from 'react-apollo';
import { gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const CATEGORY_LIST = gql`
  query GetCategoryList {
    categories {
      name
    }
  }
`;

const GetCategoryList = () => (
  <Query query={CATEGORY_LIST}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading…</p>;
      if (error) return <p>Error :(</p>;

      return data.categories.map(({ name }) => (
        <Link to={`category/${name}`} key={name}>{`${name}`}</Link>
      ));
    }}
  </Query>
);

export default GetCategoryList;
