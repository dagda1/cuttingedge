import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { MainRoutes } from './App';

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <MainRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
