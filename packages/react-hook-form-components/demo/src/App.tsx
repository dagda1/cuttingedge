import '@cutting/component-library/styles.css';
import { ApplicationLayout, Box } from '@cutting/component-library';
import { ContactButtons, ContactForm } from '../../src';
import * as styles from './global.css';
import type { ReactNode } from 'react';
import { FormContextProvider } from '../../src/components/ContactForm/FormContext';

const contactFomProps = {
  formName: 'WebToLeads397786000002563014',
  xnQsjsdp: '3c84483c277d4654a1b4c396d146b27715022726817867cc0082152855bd1c7f',
  xmIwtLD: '9844a94925d654edab46a3a8cdca457eb46b2226a1481d09780f2cb3d2b1dd4e',
  returnUrl: '/',
};

function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ApplicationLayout heading="@cutting/react-hook-form-components" theme="supportTheme">
      <FormContextProvider {...contactFomProps}>{children}</FormContextProvider>
    </ApplicationLayout>
  );
}

export function App(): JSX.Element {
  return (
    <Layout>
      <ContactForm />
      <Box width="full" height="full" className={styles.container}>
        <ContactButtons justify="center" callType="rescue" />
      </Box>
    </Layout>
  );
}
