import { gql } from '@apollo/client';
import client from './initialization';

const CURRENCY_LIST = gql`
  query GetCategoryList {
    currencies {
      label
      symbol
    }
  }
`;

const GetCurrencyList = async () => {
  const { loading, error, data } = await client.query({ query: CURRENCY_LIST });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const dataArray = [];

  data.currencies.map((result) => {
    dataArray.push(result);
  });

  // console.log(dataArray);
  return dataArray;
};

export default GetCurrencyList;
