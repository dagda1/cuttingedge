import type { DocumentInitialProps, DocumentContext } from 'next/document';
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { GTM_ID } from '../constants';
import { isProduction } from '@cutting/util';

class FrontendDXDocument extends Document<DocumentInitialProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="referrer" content="strict-origin" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
            integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
            crossOrigin="anonymous"
          ></link>
          <link href="/src.css" rel="stylesheet" />
        </Head>
        <body>
          {isProduction && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `
            <iframe
              title="tag_manager"
              src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
              height="0"
              width="0"
              style="display: none, visibility: hidden"
            />
          `,
              }}
            ></noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default FrontendDXDocument;
