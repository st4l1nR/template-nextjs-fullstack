import { gql } from "apollo-server-micro";

export default gql`
  type Author {
    _id: ID!
    name: String!
  }

  extend type Query {
    listAuthor: [Author]!
  }

  extend type Mutation {
    createAuthor:Boolean
  }
`;
