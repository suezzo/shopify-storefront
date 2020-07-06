import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  {
    products(first: 10, sortKey: BEST_SELLING) {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export { GET_PRODUCTS };
