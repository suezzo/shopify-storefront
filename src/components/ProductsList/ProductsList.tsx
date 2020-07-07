import * as React from 'react';
import { ProductsListItem } from './ProductsListItem';
import { Grid } from '@material-ui/core';

const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <Grid container spacing={2}>
      {products.map(({ node }) => (
        <Grid item xs={2}>
          <ProductsListItem
            title={node.title}
            handle={node.handle}
            photo={node.images.edges[0].node.originalSrc}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export { ProductsList };
