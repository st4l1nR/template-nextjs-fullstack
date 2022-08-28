import { ApolloClient, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getSession } from 'next-auth/react';
import { createUploadLink } from 'apollo-upload-client';

const authLink = setContext(async (_, { headers }) => {
  const session = await getSession();
  const token = "";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const uploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API,
});

const cache = new InMemoryCache();

export default new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API,
  link: from([authLink, uploadLink]),
  cache,
});
