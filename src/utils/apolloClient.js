import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const uri = process.env.NODE_ENV !== "development" ? 'https://api.adanconstanzo.com/graphql' : `${process.env.REACT_APP_BACKEND_URL}/graphql`
const link = new HttpLink({ uri });
const client = new ApolloClient({
  cache,
  link
});

export default client;