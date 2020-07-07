import * as React from 'react';
import { Grid } from '@material-ui/core';

type Props = {
  description: string;
};

const Product = ({ description }: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </Grid>
    </Grid>
  );
};

export { Product };
