import { renderToStream } from 'react-streaming/server'
import { escapeInject } from 'vite-plugin-ssr'
import { PageShell } from './PageShell'
import { getPageTitle } from './getPageTitle'
import type { PageContextServer } from './types'

export const passToClient = ['pageProps', 'documentProps', 'someAsyncProps']

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext

  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    // We don't need streaming for a pre-rendered app.
    // (We still use react-streaming to enable <Suspsense>.)
    { disable: true }
  )

  const title = getPageTitle(pageContext)

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`

  return {
    documentHtml,
    // We can return a `pageContext` promise
    pageContext: (async () => {
      return {
        someAsyncProps: 42
      }
    })()
  }
}
