import * as React from 'react';
import Document from 'next/document';

import { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  getChildContext() {
    return {
      _documentProps: {
        ...this.props,
        dev: false
      }
    };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
