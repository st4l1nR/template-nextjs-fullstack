// @ts-ignore
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import { authorQueries, authorMutations } from './author';
import { imageMutations } from './image';

export default {
  Upload: GraphQLUpload,
  Query: {
    ...authorQueries,
  },
  Mutation: {
    ...authorMutations,
    ...imageMutations,
  },
};
