// apollo-client.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql", // Update this URL with your Strapi GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
