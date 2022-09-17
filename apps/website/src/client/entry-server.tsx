import { StrictMode } from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { MainRoutes } from '../routes';
// import "./index.css";

export function render(url: string): string {
  return ReactDOMServer.renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <MainRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
