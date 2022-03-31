import '@cutting/component-library/styles.css';
import { Explorer } from '../../containers/Explorer/Explorer';
import { ApplicationLayout, salesTheme } from '@cutting/component-library';

export function App(): JSX.Element {
  return (
    <ApplicationLayout heading="@cutting/graphql-explorer" className={salesTheme}>
      <Explorer gatewayUrl="http://localhost:4000/graphql" />
    </ApplicationLayout>
  );
}
