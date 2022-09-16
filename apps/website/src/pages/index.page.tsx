import { navigate } from 'vite-plugin-ssr/client/router';

export function Page(): JSX.Element {
  return (
    <>
      <h1>
        Welcome to <code>vite-plugin-ssr</code>
      </h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
      </ul>
      <p>
        We <code>export const clientRouting = true</code> to enable Client Routing.{' '}
        <button
          onClick={() => {
            navigate('/markdown');
          }}
        >
          Random Page
        </button>
      </p>
    </>
  );
}
