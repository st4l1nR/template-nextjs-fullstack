import { ApolloServer } from 'apollo-server-micro';
import connectDb from '@lib/connectDb';
import typeDefs from '@graphql/typeDefs';
import resolvers from '@graphql/resolvers';
import models from '@graphql/models';

connectDb()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      models,
    };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
