import React from 'react';
import serialize from 'serialize-javascript';
import { DocumentProps, DocumentType } from './types';

export class Document<TProps extends DocumentType, TData = {}, TParams = unknown> extends React.Component<
  DocumentProps<TProps, TData, TParams>
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps({ assets, data, renderPage, Layout }: DocumentProps<any>) {
    const page = await renderPage(Layout);

    return { assets, data, ...page };
  }

  render() {
    const { helmet, assets, data } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html lang="en" {...htmlAttrs}>
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

export function AfterData<TData>({ data }: { data: TData }) {
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
