import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import {
  GET_PRODUCTS,
  GET_BESTSELLING_PRODUCTS,
} from 'graphql/queries/getProducts';
import withApollo from 'graphql/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';
import { ProductsList } from 'components/ProductsList';
import { Container } from '@material-ui/core';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_BESTSELLING_PRODUCTS);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container fixed>
          {loading && <h1>Loading...</h1>}
          {data && <ProductsList products={data.products.edges} />}
        </Container>
      </main>

      <footer></footer>
    </div>
  );
};

export default withApollo(HomePage, { getDataFromTree });
