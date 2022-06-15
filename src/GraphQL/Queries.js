import React from 'react';
import { Query } from 'react-apollo';
import { gql } from '@apollo/client';
import { NavLink } from 'react-router-dom';

import client from './initialization';

const CATEGORY_LIST = gql`
  query GetCategoryList {
    categories {
      name
    }
  }
`;

export const GetCategoryList = async () => {
  const { loading, error, data } = await client.query({ query: CATEGORY_LIST });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const dataArray = [];

  data.categories.map(({ name }) => {
    dataArray.push(name);
  });

  return dataArray;
};
