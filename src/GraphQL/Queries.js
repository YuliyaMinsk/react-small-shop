import React from 'react';
import { Query } from 'react-apollo';
import { gql } from '@apollo/client';

const CATEGORY_LIST = gql`
  query GetCategoryList {
    categories {
      name
    }
  }
`;

const CategoryList = () => (
  <Query query={CATEGORY_LIST}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading…</p>;
      if (error) return <p>Error :(</p>;

      return data.categories.map(({ name }) => (
        <div key={name}>
          <p>{`Category: ${name}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default CategoryList;
