import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  HttpLink,
  gql,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import GetCharacters from "./components/GetCharacters";

import Layout from "./components/Layout";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <GetCharacters />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
