import gql from 'graphql-tag';

const GET_BESTSELLING_PRODUCTS = gql`
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

const GET_PRODUCT = gql`
  query productByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      descriptionHtml
    }
  }
`;

export { GET_BESTSELLING_PRODUCTS, GET_PRODUCTS, GET_PRODUCT };
