import { ContactForm } from '../../components/ContactForm/ContactForm';
import { FullPageLayout } from '../../components/Layouts/FullPageLayout';
import { header, root } from '../../components/ContactForm/ContactForm.css';
import { Heading } from '@cutting/component-library';
import { Text } from '@cutting/component-library';

export function Contact(): JSX.Element {
  return (
    <FullPageLayout className={root}>
      <div className={header}>
        <Heading level="1">Let&apos;s Talk</Heading>
        <Text component="p">How can we help?</Text>
      </div>
      <ContactForm />
    </FullPageLayout>
  );
}

export default Contact;
