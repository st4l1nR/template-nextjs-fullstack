import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache(),
  });