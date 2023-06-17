import { ContactForm } from '../../components/ContactForm/ContactForm';
import { FullPageLayout } from '../../components/Layouts/FullPageLayout';
import { header, root } from '../../components/ContactForm/ContactForm.css';

export function Contact(): JSX.Element {
  return (
    <FullPageLayout className={root}>
      <div className={header}>
        <h1>Let&apos;s Talk</h1>
        <p>How can we help?</p>
      </div>
      <ContactForm />
    </FullPageLayout>
  );
}

export default Contact;
