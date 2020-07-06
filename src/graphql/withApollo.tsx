// lib/withApollo.js
import withApollo from 'next-with-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: process.env.SHOPIFY_API_URL,
});

const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_API_ACCESS_TOKEN,
  },
}));

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: middlewareLink.concat(httpLink),
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => (
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    ),
  }
);
