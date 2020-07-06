import * as React from 'react';
import { AppProps } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { compose } from 'ramda';

import makeStore from '../store';
import { AppHeader } from 'components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AppHeader />
    <Component {...pageProps} />
  </>
);

export default compose(withRedux(makeStore))(MyApp);
