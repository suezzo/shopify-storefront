import * as React from 'react';
import { getDataFromTree } from '@apollo/react-ssr';
import { useRouter } from 'next/router';
import withApollo from 'graphql/withApollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_PRODUCT } from 'graphql/queries/getProducts';
import { Product } from 'components/Product';

const ProductPage = () => {
  const router = useRouter();
  const { handle } = router.query;

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { handle },
  });

  console.log(data, error, loading);
  return <Product description={data.productByHandle.descriptionHtml} />;
};

export default withApollo(ProductPage, { getDataFromTree });
