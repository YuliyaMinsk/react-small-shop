import { gql } from '@apollo/client';
import client from './initialization';

const PRODUCT_LIST = gql`
  query {
    category {
      products {
        id
        name
        category
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

const GetProductList = async () => {
  const { loading, error, data } = await client.query({ query: PRODUCT_LIST });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const dataArray = [];

  // data.category.products.map(({ name }) => {
  //   dataArray.push(name);
  // });

  // return dataArray;
  return data.category.products;
};

export default GetProductList;
