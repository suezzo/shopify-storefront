import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { GET_PRODUCTS } from 'graphql/queries/getProducts';
import withApollo from 'graphql/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {loading && <h1>Loading...</h1>}
        {data && (
          <ul>
            {data.products.edges.map((product) => (
              <li>{product.node.title}</li>
            ))}
          </ul>
        )}
      </main>

      <footer></footer>
    </div>
  );
};

export default withApollo(HomePage, { getDataFromTree });
