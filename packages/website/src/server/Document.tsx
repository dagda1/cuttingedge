import React from 'react';
import serialize from 'serialize-javascript';
import { DocumentProps } from './types';

export class Document extends React.Component<DocumentProps> {
  static async getInitialProps({ assets, data, renderPage }: DocumentProps) {
    const page = await renderPage();

    return { assets, data, ...page };
  }

  render() {
    const { helmet, assets, data } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html lang="em" {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {assets.client.css && <link rel="stylesheet" href={assets.client.css} />}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          {assets.vendor && <script type="text/javascript" src={assets.vendor.js} defer crossOrigin="anonymous" />}
          <script type="text/javascript" src={assets.client.js} defer crossOrigin="anonymous" />
        </body>
      </html>
    );
  }
}

export function AfterRoot() {
  return <div id="root">DO_NOT_DELETE_THIS_YOU_WILL_BREAK_YOUR_APP</div>;
}

// eslint-disable-next-line
export function AfterData({ data }: any) {
  return (
    <script
      id="server-app-state"
      type="application/json"
      dangerouslySetInnerHTML={{
        __html: serialize({ ...data })
      }}
    />
  );
}
