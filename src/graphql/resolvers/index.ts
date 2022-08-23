import { authorQueries, authorMutations } from "./author";

export default {
  Query: {
    ...authorQueries,
  },
  Mutation: {
    ...authorMutations,
  },
};
