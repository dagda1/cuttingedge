import { matchPath } from 'react-router-dom';
import { AsyncRouteProps, InitialProps, CtxBase } from './types';
import { isAsyncComponent } from './utils';

export async function loadInitialProps<TData = unknown>(
  routes: AsyncRouteProps[],
  pathname: string,
  ctx: CtxBase
): Promise<InitialProps> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const promises: Promise<any>[] = [];

  const matchedComponent = routes.find((route: AsyncRouteProps) => {
    const match = matchPath(pathname, route);

    if (match && route.component && isAsyncComponent(route.component)) {
      const component = route.component;

      promises.push(
        component.load
          ? component.load().then(() => component.getInitialProps({ match, ...ctx }))
          : // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (component.getInitialProps({ match, ...ctx }) as any)
      );
    }

    return !!match;
  });

  return {
    match: matchedComponent,
    data: (await Promise.all(promises))[0]
  };
}
