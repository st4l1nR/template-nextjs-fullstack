import { ApolloServer } from 'apollo-server-micro';
import connectDb from '@lib/connectDb';
import typeDefs from '@graphql/typeDefs';
import resolvers from '@graphql/resolvers';
import models from '@graphql/models';
import Cors from 'micro-cors';
import processRequest from 'graphql-upload/processRequest.mjs';

const cors = Cors();

connectDb();
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

export default cors(async function handler(req, res) {
  if (req.method == 'OPTIONS') {
    res.end();
    return false;
  }
  const contentType = req.headers['content-type'];
  if (contentType && contentType.startsWith('multipart/form-data')) {
    req.filePayload = await processRequest(req, res);
  }
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
});
