import models from "@graphql/models";

export const authorQueries = {
  listAuthor: async (parent, args, { models }) => {
    return await models.author.find({});
  },
};
export const authorMutations = {
  createAuthor: async (parent, args, context) => {},
};
