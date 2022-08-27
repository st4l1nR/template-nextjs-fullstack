import { gql } from "apollo-server-micro";
import author from "./author";

const link = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [link, author];
