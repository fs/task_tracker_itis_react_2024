import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://tasktracker-itis-2024-269a840ae88e.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
