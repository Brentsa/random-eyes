import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($_id: ID!) {
    user(username: $username) {
      _id
      username
      email
      address
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      address
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query Query {
    products {
      _id
      name
      description
      image
      price
      category {
        name
        _id
      }
    }
  }
`;