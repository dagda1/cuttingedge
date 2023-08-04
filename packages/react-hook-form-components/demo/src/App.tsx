import '@cutting/component-library/styles.css';
import { ApplicationLayout } from '@cutting/component-library';
import { ContactButtons, ContactForm } from '../../src';
import * as styles from './global.css';

const contactFomProps = {
  formName: 'WebToLeads397786000002563014',
  xnQsjsdp: '3c84483c277d4654a1b4c396d146b27715022726817867cc0082152855bd1c7f',
  xmIwtLD: '9844a94925d654edab46a3a8cdca457eb46b2226a1481d09780f2cb3d2b1dd4e',
};

export function App(): JSX.Element {
  return (
    <ApplicationLayout heading="@cutting/react-hook-form-components" theme="supportTheme">
      <ContactForm {...contactFomProps} />
      <div className={styles.container}>
        <ContactButtons justify="center" callType="rescue" {...contactFomProps} />
      </div>
    </ApplicationLayout>
  );
}
