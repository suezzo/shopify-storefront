import gql from 'graphql-tag';

const ADD_TO_BASKET = gql`
  {
    products(first: 6, sortKey: BEST_SELLING) {
      edges {
        node {
          title
          handle
          images(first: 1) {
            edges {
              node {
                originalSrc
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

export { ADD_TO_BASKET };
