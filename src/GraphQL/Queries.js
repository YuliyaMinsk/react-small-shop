import React from 'react';
import { Query } from 'react-apollo';
import { gql } from '@apollo/client';
import { NavLink } from 'react-router-dom';

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
        <NavLink to={`category/${name}`} key={name}>{`${name}`}</NavLink>
      ));
    }}
  </Query>
);

export default GetCategoryList;
