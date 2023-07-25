import '@cutting/component-library/styles.css';
import { ApplicationLayout } from '@cutting/component-library';
import { ContactButtons } from '../../src';
import * as styles from './global.css';

export function App(): JSX.Element {
  return (
    <ApplicationLayout heading="@cutting/svg" theme="salesTheme">
      <div className={styles.container}>
        <ContactButtons justify="center" callType="rescue" />
      </div>
    </ApplicationLayout>
  );
}
