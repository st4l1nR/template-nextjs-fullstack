import { gql } from 'apollo-server-micro';
import author from './author';
import image from './image';

const link = gql`
  scalar Upload
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [link, author, image];
