const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    email: String
    address: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    allUsers: [User]
    order(_id: ID!): Order
    me: User
    checkout(products: [ID]): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, address: String!): Auth
    updateUser(username: String, email: String, password: String, address: String!): User
    updateProduct(_id: ID!, quantity: Int!): Product
    addOrder(products: [ID]!): Order
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;