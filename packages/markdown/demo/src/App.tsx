import '@cutting/component-library/styles.css';
import { ApplicationLayout, Heading } from '@cutting/component-library';

export function App(): JSX.Element {
  return (
    <ApplicationLayout heading="@cutting/svg" theme="salesTheme">
      <Heading level="1">@cutting/markdown</Heading>
    </ApplicationLayout>
  );
}
