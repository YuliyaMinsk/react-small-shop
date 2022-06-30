import { gql } from '@apollo/client';
import client from './initialization';

const PRODUCT_SINGLE = (id) => gql`
  query {
    product(id: "${id}") {
      id
      name
      brand
      category
      description
      inStock
      gallery
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;

const GetProduct = async (id) => {
  const { loading, error, data } = await client.query({ query: PRODUCT_SINGLE(id) });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return data.product;
};

export default GetProduct;
